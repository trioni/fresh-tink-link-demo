export const apiCredentials = {
  accountCheck: {
    clientId: Deno.env.get("TINK_ACCOUNT_CHECK_CLIENT_ID") || "",
    clientSecret: Deno.env.get("TINK_ACCOUNT_CHECK_CLIENT_SECRET") || "",
  },
  transactions: {
    clientId: Deno.env.get("TINK_TRANSACTIONS_CLIENT_ID") || "",
    clientSecret: Deno.env.get("TINK_TRANSACTIONS_CLIENT_SECRET") || "",
  },
};
