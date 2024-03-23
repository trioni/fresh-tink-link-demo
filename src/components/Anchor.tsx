import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-10 py-4 inline-block text-white border-2 rounded-full bg-teal hover:bg-teal-200 transition-colors"
    />
  );
}
