import fs from 'node:fs';
import { config as loadEnv } from 'dotenv';
import type { VercelConfig } from '@vercel/config/v1';

loadEnv();

const enableMaintenance = process.env.PUBLIC_ENABLE_MAINTENANCE === 'true';

const config: VercelConfig = {
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

fs.writeFileSync('vercel.json', JSON.stringify(config, null, 2));

try {
  fs.writeFileSync('vercel.json', JSON.stringify(config, null, 2));
  console.log('✅ vercel.json generated successfully');
} catch (error) {
  console.error('❌ Failed to write vercel.json:', error);
  process.exit(1);
}
