import React from "react";
import {useMsal} from "@azure/msal-react";
import {scopes} from "../auth/authConfig";
import Button from "react-bootstrap/Button";
import {IPublicClientApplication} from '@azure/msal-browser';

function handleLogin(instance: IPublicClientApplication) {
    instance.loginRedirect(scopes).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const {instance} = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in</Button>
    );
}
