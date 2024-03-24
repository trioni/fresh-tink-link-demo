import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout text-sans h-screen flex flex-col">
      <div>
        <a href="/" title="Home">
          <img src="/logo.svg" nonce="abc" alt="" />
        </a>
      </div>
      <Component />
    </div>
  );
}
