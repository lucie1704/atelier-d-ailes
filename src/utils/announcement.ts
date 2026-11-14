import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Same checks as `src/routes/annonce.astro`
export const hasActiveAnnouncement = (locale: string): boolean => {
  const dir = join(process.cwd(), 'src/cms', locale);
  const { active, announcement } = JSON.parse(readFileSync(join(dir, 'active-announcement.json'), 'utf-8'));

  return Boolean(active && announcement && existsSync(join(dir, 'announcements', `${announcement}.json`)));
};
