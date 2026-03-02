// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="../.astro/astro-i18n.d.ts" />
/// <reference types="../.astro/i18next.d.ts" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />
/// <reference types="@astrolicious/i18n/client" />

declare module '*.yaml' {
  const value: unknown;
  export default value;
}

declare module '*.yml' {
  const value: unknown;
  export default value;
}
