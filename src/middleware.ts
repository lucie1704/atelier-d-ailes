// from https://vedantbhagwat.com/blog/fixing-keystatic-oauth-redirect-uri-localhost-error

import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Fix Keystatic redirect_uri by respecting forwarded headers
  // Workaround for https://github.com/Thinkmill/keystatic/issues/1022
  const isOAuthRoute =
    context.url.pathname.includes('/github/oauth/') || context.url.pathname.includes('/github/login');

  if (isOAuthRoute) {
    const forwardedHost = context.request.headers.get('x-forwarded-host');
    const forwardedProto = context.request.headers.get('x-forwarded-proto');

    if (forwardedHost && forwardedProto) {
      // Rewrite URL to use the correct public domain
      const correctUrl = new URL(context.url);
      correctUrl.protocol = forwardedProto;
      correctUrl.host = forwardedHost;

      // Create new request with corrected URL
      const newRequest = new Request(correctUrl.toString(), {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.body,
        // @ts-expect-error necessary
        duplex: 'half',
      });

      // Update context with corrected values
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
