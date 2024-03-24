type IdentitySummary = {
  name?: string;
  ssn?: string;
};

type Identity = {
  name?: string;
  ssn?: string;
};

type Party = {
  identity: Identity;
  role: "HOLDER" | "AUTHORIZED_USER" | "OTHER" | "UNKNOWN";
};

type AccountSummary = {
  accountIdentifiers: unknown;
  accountNumber: string;
  accountType: "CHECKING" | "SAVINGS" | "CREDIT_CARD";
  currencyCode: string;
  name: string;
  id: string;
  parties: Party[];
};

type ProviderUserData = {
  providerName: string;
  updated: number;
  financialInstitutionName: string;
  identity: IdentitySummary;
  accounts: AccountSummary[];
};
export type AccountCheckReport = {
  userDataByProvider: ProviderUserData[];
};

export const ReportsService = {
  async getAccountCheckReport(
    accessToken: string,
    id: string,
  ): Promise<AccountCheckReport> {
    const res = await fetch(
      `https://api.tink.com/api/v1/account-verification-reports/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      },
    );

    const data = await res.json();

    return data;
  },
};
