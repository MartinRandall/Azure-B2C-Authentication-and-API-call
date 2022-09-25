import React, {useEffect, useState} from 'react';
import {useMsal} from '@azure/msal-react';
import {scopes} from '../auth/authConfig';
import {PagedResponse} from '../models/pagedResponse';
import {Company} from '../models/company';

export type GetCompaniesButtonProps = {}

export default function GetCompaniesButton({}: GetCompaniesButtonProps) {
    const {instance, accounts} = useMsal();
    const [accessToken, setAccessToken] = useState<string>('');
    const [companies, setCompanies] = useState<Array<Company>>([]);

    /// Get an access token for the API when the component is mounted
    useEffect(() => {
        const request = {
            ...scopes,
            account: accounts[0]
        };

        instance.acquireTokenSilent(request)
            .then(response => setAccessToken(response.accessToken))
            .catch(e => {
                instance.acquireTokenPopup(request).then(response => setAccessToken(response.accessToken))
            });
    }, []);

    const getCompanies: () => Promise<PagedResponse<Company> | null> = async () => {
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;
        headers.append("Authorization", bearer);

        const options = {
            method: 'GET',
            headers: headers
        };

        const response = await fetch('https://fixzyapi20220830171341.azurewebsites.net/companies', options)
        return response.ok ? response.json() : null;
    };

    const onCompanyButtonClicked = async () => {
        const companiesResponse = await getCompanies();
        if (companiesResponse) {
            setCompanies(companiesResponse.data);
        }
    };

    return (
        <>
            <button onClick={onCompanyButtonClicked}>Get Companies</button>

            <ul>
                {companies.map(company => <li key={company.id}>{company.name}</li>)}
            </ul>
        </>
    );
}
