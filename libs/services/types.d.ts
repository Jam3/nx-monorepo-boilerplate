declare module 'no-op' {
  export default function noop(...args): void;
}

declare module 'get-scroll' {
  export function getScrollTop(): number;
}
