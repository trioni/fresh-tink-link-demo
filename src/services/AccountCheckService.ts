import { apiCredentials } from "../apiCredentials.ts";
import { OauthService } from "./OauthService.ts";
import { ReportsService } from "./ReportsService.ts";

export const AccountCheckService = {
  async getReport(id: string) {
    const body = new URLSearchParams({
      client_id: apiCredentials.accountCheck.clientId,
      client_secret: apiCredentials.accountCheck.clientSecret,
      grant_type: "client_credentials",
      scope: "account-verification-reports:read",
    });

    const accessToken = await OauthService.getAccessToken(body);
    const data = await ReportsService.getAccountCheckReport(
      accessToken,
      id,
    );

    return data;
  },
};
