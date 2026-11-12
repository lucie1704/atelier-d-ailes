import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { LOCALES, ROUTES } from '../constants/i18n';
import { getRouteFromFile, localizePath } from './paths';

/**
 * Injects every page of `src/routes` once per locale, with its translated path:
 * `src/routes/tarifs.astro` → `/tarifs` and `/en/pricing`.
 */
export default function i18nRoutes(): AstroIntegration {
  return {
    name: 'i18n-routes',
    hooks: {
      'astro:config:setup': ({ config, injectRoute, logger }) => {
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
            injectRoute({ pattern, entrypoint: join(routesDir, file) });
            logger.debug(`Injected "${pattern}"`);
          }
        }
      },
    },
  };
}
