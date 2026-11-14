import { defineMiddleware, sequence } from 'astro:middleware';
import { runWithI18n } from '~/i18n';

const i18n = defineMiddleware((context, next) => runWithI18n(context.url.pathname, next));

// from https://vedantbhagwat.com/blog/fixing-keystatic-oauth-redirect-uri-localhost-error

const keystaticOAuth = defineMiddleware(async (context, next) => {
  // Workaround for https://github.com/Thinkmill/keystatic/issues/1022
  const isOAuthRoute =
    context.url.pathname.includes('/github/oauth/') || context.url.pathname.includes('/github/login');

  if (isOAuthRoute) {
    const forwardedHost = context.request.headers.get('x-forwarded-host');
    const forwardedProto = context.request.headers.get('x-forwarded-proto');

    if (forwardedHost && forwardedProto) {
      const correctUrl = new URL(context.url);
      correctUrl.protocol = forwardedProto;
      correctUrl.host = forwardedHost;

      const newRequest = new Request(correctUrl.toString(), {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.body,
        // @ts-expect-error necessary
        duplex: 'half',
      });

      Object.defineProperty(context, 'url', {
        value: correctUrl,
        writable: false,
      });

      Object.defineProperty(context, 'request', {
        value: newRequest,
        writable: false,
      });
    }
  }

  return next();
});

export const onRequest = sequence(i18n, keystaticOAuth);
