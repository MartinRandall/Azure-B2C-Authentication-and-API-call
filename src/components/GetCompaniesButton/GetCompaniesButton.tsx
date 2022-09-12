import React, {useState} from 'react';
import {useMsal} from '@azure/msal-react';
import {loginRequest} from '../../authConfig';
import {AuthenticationResult} from '@azure/msal-browser';

export type GetCompaniesButtonProps = {}

export default function GetCompaniesButton({}: GetCompaniesButtonProps) {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState<string>('');

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response: AuthenticationResult) => {
            console.log(response.accessToken);
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response: AuthenticationResult) => {
                setAccessToken(response.accessToken);
            });
        });
    }


    function getCompanies() {
        RequestAccessToken();
    }

    return (<button onClick={getCompanies}>Get Companies</button>);
}
