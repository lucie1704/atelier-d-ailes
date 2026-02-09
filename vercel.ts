import type { VercelConfig } from '@vercel/config/v1';

const isMaintenanceEnabled = process.env.PUBLIC_ENABLE_MAINTENANCE === 'true';

export const config: VercelConfig = {
  cleanUrls: true,
  trailingSlash: false,
  headers: [
    {
      source: '/_astro/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  redirects: isMaintenanceEnabled
    ? [
        {
          source: '/((?!maintenance|_astro).*)',
          destination: '/maintenance',
          permanent: false,
        },
      ]
    : [],
};
