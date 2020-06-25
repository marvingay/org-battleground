import React, { useState } from 'react';
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CLIENT_ID } from '../services/config';

interface GoogleUserObject {
  googleId: string;
  tokenId: string;
  accessToken: string;
  tokenObj: object;
  profileObj: object;
}

const GoogleButton: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const login = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    response = response as GoogleLoginResponse;
    if (response.accessToken) {
      setAuthenticated(true);
      setAuthToken(response.accessToken);
    }
  };

  const handleLoginFailure = (
    _response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    alert('Login failed!');
  };

  const logout = () => {
    setAuthenticated(false);
    setAuthToken('');
  };

  const handleLogoutFailure = (): void => {
    alert('Logout failed!');
  };

  return (
    <div>
      {authenticated ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText='Logout'
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_orign'}
          responseType='code,token'
        />
      )}
    </div>
  );
};

export default GoogleButton;
