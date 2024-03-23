import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="px-10 py-4 text-white rounded-full text-base bg-teal hover:bg-teal-700 transition-colors"
    />
  );
}
