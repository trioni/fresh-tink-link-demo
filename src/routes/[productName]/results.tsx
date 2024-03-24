import { Handlers, PageProps, RouteConfig } from "$fresh/server.ts";
import { WithSession } from "fresh-session";
import { productConfigMap } from "../../app.config.ts";
import { AccountCheckReport } from "../../services/ReportsService.ts";

function isAccountCheckReport(
  data: AccountCheckReport | unknown,
): data is AccountCheckReport {
  if ((data as AccountCheckReport).userDataByProvider !== undefined) {
    return true;
  }

  return false;
}

export const config: RouteConfig = {
  csp: true,
};

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
    <div class="h-full p-4 flex flex-col">
      <div class="container mx-auto sm:flex sm:flex-row gap-4 py-8 px-4 sm:-mt-16 pt-16">
        <div className="flex flex-col w-full">
          <h1 class="text-4xl mb-4">
            Results for {props.params.productName}
          </h1>
          {isAccountCheckReport(props.data) && (
            <div class="mb-4 flex gap-4">
              {props.data.userDataByProvider.map((providerUserData) => (
                <div class="border rounded p-4 bg-white shadow">
                  <h2 class="text-2xl mb-2 text-teal">
                    {providerUserData.financialInstitutionName}
                  </h2>
                  <ul>
                    {providerUserData.accounts.map((account) => (
                      <li>
                        <dl class="grid grid-cols-2 mb-4">
                          <dt class="font-bold">Account Name</dt>
                          <dd class="ml-2 mb-2">{account.name}</dd>
                          <dt class="font-bold">Account Number</dt>
                          <dd class="ml-2">
                            {account.accountNumber}
                          </dd>
                        </dl>
                        <ul class="border-t pt-4">
                          {account.parties.map((party) => (
                            <li class="flex">
                              {party.identity.name || party.identity.ssn ||
                                "Unknown party"}{" "}
                              <div class="ml-2 border rounded text-white bg-teal px-1">
                                {party.role}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          <details class="mb-4">
            <summary class="p-2 border rounded w-full">JSON Response</summary>
            <pre class="p-4 border rounded bg-white">{JSON.stringify(props.data, null, 2)}</pre>
          </details>
        </div>
      </div>
    </div>
  );
}
