import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { LOCALES, ROUTES, type Locale } from '../constants/i18n';
import { getRouteFromFile, localizePath } from './paths';

interface Options {
  skipOnBuild?: (route: string, locale: Locale) => boolean;
}

export default function i18nRoutes({ skipOnBuild }: Options = {}): AstroIntegration {
  return {
    name: 'i18n-routes',
    hooks: {
      'astro:config:setup': ({ command, config, injectRoute, logger }) => {
        const routesDir = fileURLToPath(new URL('routes/', config.srcDir));
        const files = readdirSync(routesDir, { recursive: true, encoding: 'utf-8' }).filter((file) =>
          file.endsWith('.astro')
        );

        for (const file of files) {
          const route = getRouteFromFile(file);
          if (!ROUTES.includes(route)) {
            throw new Error(`"src/routes/${file}" is missing from \`pages\` in src/constants/i18n.ts`);
          }

          for (const locale of LOCALES) {
            const pattern = localizePath(route, locale);
            if (command === 'build' && skipOnBuild?.(route, locale)) {
              logger.info(`Skipped "${pattern}"`);
              continue;
            }
            injectRoute({ pattern, entrypoint: join(routesDir, file) });
            logger.debug(`Injected "${pattern}"`);
          }
        }
      },
    },
  };
}
