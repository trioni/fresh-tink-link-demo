import { Handlers, PageProps } from "$fresh/server.ts";
import { WithSession } from "fresh-session";
import { productConfigMap } from "../../app.config.ts";

export const handler: Handlers<unknown, WithSession> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const productConfig = productConfigMap[ctx.params.productName];

    const requiredParam = url.searchParams.get(productConfig.callbackKey);
    if (!requiredParam) {
      return ctx.renderNotFound();
    }

    const { session } = ctx.state;
    session.flash(productConfig.callbackKey, requiredParam);

    return new Response("", {
      status: 307,
      headers: { Location: `/${ctx.params.productName}/results` },
    });
  },
};

export default function Callback(props: PageProps) {
  return (
    <div>
      <h1>Callback for {props.params.productName}</h1>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
}
