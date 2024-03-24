import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-9 py-4 inline-block text-white leading-none shadow rounded-full bg-teal hover:bg-teal-dark active:scale-95 active:shadow-lg transition-colors"
    />
  );
}
