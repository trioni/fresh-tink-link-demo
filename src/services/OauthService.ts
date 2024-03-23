export const OauthService = {
  async getAccessToken(body: URLSearchParams) {
    console.log(body);

    const res = await fetch("https://api.tink.com/api/v1/oauth/token", {
      method: "POST",
      body,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }

    return data.access_token;
  },
};
