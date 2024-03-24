import { type PageProps } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  useCSP((csp) => {
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    if (!csp.directives.imgSrc) {
      csp.directives.imgSrc = ["'self'"];
    }
    csp.directives.styleSrc.push("'self'");
    csp.directives.imgSrc.push("https://cdn.tink.se");
    csp.directives.defaultSrc = ["'self'"];
  });

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-tink-link-demo</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-gray">
        <Component />
      </body>
    </html>
  );
}
