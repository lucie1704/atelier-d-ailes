import { type VercelConfig, deploymentEnv } from '@vercel/config/v1';

/*
const enableMaintenance = deploymentEnv('PUBLIC_ENABLE_MAINTENANCE') === 'true';
*/

const rawEnv = deploymentEnv('PUBLIC_ENABLE_MAINTENANCE');
console.log('Env PUBLIC_ENABLE_MAINTENANCE raw value →', rawEnv);
const enableMaintenance = rawEnv === 'true';
console.log('ENV VAR (process.env):', process.env.PUBLIC_ENABLE_MAINTENANCE);

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
  redirects: enableMaintenance
    ? [
        {
          source: '/((?!maintenance|_astro).*)',
          destination: '/maintenance',
          permanent: false,
        },
      ]
    : [],
};
