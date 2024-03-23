export const ReportsService = {
  async getAccountCheckReport(accessToken: string, id: string) {
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
