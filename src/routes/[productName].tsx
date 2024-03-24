import { Handlers, PageProps, RouteConfig } from "$fresh/server.ts";
import { productConfigMap } from "../app.config.ts";
import { Button } from "../components/Button.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const productConfig = productConfigMap[ctx.params.productName];

    if (!productConfig) {
      return ctx.renderNotFound();
    }

    return ctx.render({});
  },
};

export const config: RouteConfig = {
  csp: true,
};

export default function ProductDemo(props: PageProps) {
  const productConfig = productConfigMap[props.params.productName];

  return (
    <div class="h-full p-4 flex flex-col">
      <form class="max-w-2xl mx-auto my-auto" action={productConfig.url}>
        <h1 class="text-4xl mb-2">{productConfig.title}</h1>
        <p class="mb-8 text-xl">{productConfig.body}</p>
        <input
          name="client_id"
          value={productConfig.params.clientId}
          type="hidden"
        />
        <input
          name="redirect_uri"
          value={productConfig.params.redirectUri}
          type="hidden"
        />
        <input name="test" value="true" type="hidden" />
        <div class="sm:flex gap-4">
          <div class="flex flex-col mb-4 w-full sm:w-1/2">
            <label for="market">Market</label>
            <select
              id="market"
              name="market"
              class="py-4 px-4 border border-transparent shadow rounded outline-none focus:border-teal-dark"
            >
              {productConfig.markets.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div class="flex flex-col mb-4 w-full sm:w-1/2">
            <label for="locale">Language</label>
            <select
              id="locale"
              name="locale"
              class="py-4 px-4 border border-transparent shadow rounded outline-none focus:border-teal-dark"
            >
              {productConfig.locales.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="flex justify-end">
          <Button type="submit">Try the demo</Button>
        </div>
      </form>
    </div>
  );
}
