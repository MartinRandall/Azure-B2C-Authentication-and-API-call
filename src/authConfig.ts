export const msalConfig = {
    auth: {
        clientId: "ed081a5b-5ac1-4dea-9406-c87765830f6e",
        authority: "https://login.microsoftonline.com/1cad2b24-8072-481b-a39c-010097779d70",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["api://3b86d6b8-62bf-4072-82d1-76cf959ff6c2/access_as_user"]
};
