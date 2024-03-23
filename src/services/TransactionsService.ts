import { apiCredentials } from "../apiCredentials.ts";
import { OauthService } from "./OauthService.ts";

export const TransactionsService = {
  async getData(code: string) {
    const body = new URLSearchParams({
      code,
      client_id: apiCredentials.transactions.clientId,
      client_secret: apiCredentials.transactions.clientSecret,
      grant_type: "authorization_code",
    });

    const accessToken = await OauthService.getAccessToken(body);

    const transactions = await TransactionsService.getTransactions(
      accessToken,
    );
    const accounts = await TransactionsService.getAccounts(accessToken);

    return {
      transactions,
      accounts,
    };
  },
  async getTransactions(accessToken: string) {
    const res = await fetch("https://api.tink.com/data/v2/transactions", {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  },
  async getAccounts(accessToken: string) {
    const res = await fetch("https://api.tink.com/data/v2/accounts", {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  },
};
