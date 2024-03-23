import { AccountCheckService } from "./services/AccountCheckService.ts";
import { TransactionsService } from "./services/TransactionsService.ts";
import { apiCredentials } from "./apiCredentials.ts";

export const callbackDomain = Deno.env.get("TINK_CALLBACK_DOMAIN") ||
  "http://localhost:3000";

type TinkLinkParams = {
  clientId: string;
  redirectUri: string;
};

type ProductConfig = {
  title: string;
  body: string;
  imgSrc: string;
  href: string;
  cardBody: string;
  markets: string[];
  locales: string[];
  url: string;
  params: TinkLinkParams;
  callbackKey: string;
  hideCallbackKey: boolean;
  service: (param: string) => Promise<unknown>;
};

type ProductConfigMap = Record<string, ProductConfig>;

export const productConfigMap: ProductConfigMap = {
  "account-check": {
    title: "Account Check",
    imgSrc: "https://cdn.tink.se/link-demo/assets/income-check-logo-1.jpg",
    href: "/account-check",
    cardBody:
      "Allow your customers to instantly verify account ownership in real-time, with verified data straight from their own bank accounts.",
    body:
      "This is a demo of Account Check. Use real credentials to verify an account and aggregate information in real time. We will only access your account once and won't store your data.",
    markets: ["SE", "DE"],
    locales: ["sv_SE", "en_US"],
    url: "https://link.tink.com/1.0/account-check/create-report",
    params: {
      clientId: apiCredentials.accountCheck.clientId,
      redirectUri: `${callbackDomain}/account-check/callback`,
    },
    callbackKey: "account_verification_report_id",
    hideCallbackKey: true,
    service: AccountCheckService.getReport,
  },
  transactions: {
    title: "Transactions",
    imgSrc: "https://cdn.tink.se/link-demo/assets/transactions-logo-1.jpg",
    href: "/transactions",
    cardBody:
      "Access real-time financial data – all cleaned up and standardised so it's immediately useful and valuable.",
    body:
      "This is a demo of Transactions. Use real credentials to retrieve accounts and transactions information from your bank. We will only access your account once and won't store your data.",
    markets: ["SE", "DE"],
    locales: ["sv_SE", "en_US"],
    url: "https://link.tink.com/1.0/transactions/connect-accounts",
    params: {
      clientId: apiCredentials.transactions.clientId,
      redirectUri: `${callbackDomain}/transactions/callback`,
    },
    callbackKey: "code",
    hideCallbackKey: true,
    service: TransactionsService.getData,
  },
};
