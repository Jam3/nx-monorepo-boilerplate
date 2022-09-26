type SetTimeout = ReturnType<typeof setTimeout>;

declare module 'no-op' {
  export default function noop(...args): void;
}
