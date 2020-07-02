import React, { useState } from 'react';
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CLIENT_ID } from '../services/config';
import axios from 'axios';

const GoogleButton: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const onLogin = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    response = response as GoogleLoginResponse;
    if (response.tokenId) {
      try {
        const authResponse = await axios.post(
          'http://localhost:8000/auth',
          `idToken=${response.tokenId}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        if (authResponse.status === 201) {
          // TODO: pop up modal
          console.log('work in progress');
        }

        setAuthenticated(true);
        setAuthToken(response.tokenId);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLoginFailure = (
    _response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    alert('Login failed!');
  };

  const logout = (): void => {
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
          onSuccess={onLogin}
          onFailure={handleLoginFailure}
        />
      )}
    </div>
  );
};

export default GoogleButton;
