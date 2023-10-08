'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

const Auth0ProviderWrapper = ({ children }: { children: ReactNode }) => {
  const isClient = typeof window !== 'undefined';
  const redirectUri = isClient ? window.location.origin : '';

  return (
    <Auth0Provider
        domain="dev-kqln7r1gh0xr6t8f.uk.auth0.com"
        clientId="cWgP5646luykwvbC7nFpPTXWwWGyQ5JC"
        authorizationParams={{
          redirect_uri: redirectUri
        }}
      >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWrapper;