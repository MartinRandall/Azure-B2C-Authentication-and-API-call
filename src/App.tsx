import React from 'react';
import {PageLayout} from './components/PageLayout';
import {AuthenticatedTemplate, UnauthenticatedTemplate} from '@azure/msal-react';
import GetCompaniesButton from './components/GetCompaniesButton';


function App() {
  return (
      <PageLayout>
          <AuthenticatedTemplate>
              <GetCompaniesButton />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
              <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
      </PageLayout>
  );
}

export default App;
