export const msalConfig = {
    auth: {
        clientId: 'ed081a5b-5ac1-4dea-9406-c87765830f6e',
        authority: 'https://fixzyb2c.b2clogin.com/fixzyb2c.onmicrosoft.com/B2C_1_SignIn',
        knownAuthorities: ['fixzyb2c.b2clogin.com'],
        redirectUri: 'http://localhost:3000',
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

export const scopes = {
    scopes: ["https://fixzyb2c.onmicrosoft.com/fixzyapi/access_as_user"]
};
