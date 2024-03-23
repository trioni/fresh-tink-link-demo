import { Handlers, PageProps } from "$fresh/server.ts";
import { WithSession } from "fresh-session";
import { productConfigMap } from "../../app.config.ts";

export const handler: Handlers<unknown, WithSession> = {
  async GET(req, ctx) {
    const productConfig = productConfigMap[ctx.params.productName];

    const { session } = ctx.state;
    const param = session.flash(productConfig.callbackKey);
    if (!param) {
      return ctx.renderNotFound();
    }

    const data = await productConfig.service(param);
    return ctx.render(data);
  },
};

export default function Results(props: PageProps) {
  return (
    <div>
      <h1>Results for {props.params.productName}</h1>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
}
