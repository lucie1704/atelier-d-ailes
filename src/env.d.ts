// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

declare module '*.yaml' {
  const value: any;
  export default value;
}

declare module '*.yml' {
  const value: any;
  export default value;
}
