import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="px-9 py-4 inline-block text-white leading-none shadow rounded-full bg-teal hover:bg-teal-dark active:scale-95 transition-colors"
    />
  );
}
