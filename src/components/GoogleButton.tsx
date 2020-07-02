import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../context/types';
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CLIENT_ID } from '../services/config';
import axios from 'axios';

const GoogleButton: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

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
        dispatch({
          type: Types.SetAuthenticated,
        });
        dispatch({
          type: Types.SetAuthToken,
          payload: `${authResponse.data.webToken}`,
        });

        if (authResponse.status === 201) {
          // TODO: pop up modal
          console.log('work in progress');
        }
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
    dispatch({
      type: Types.RemoveAuthenticated,
    });
    dispatch({
      type: Types.RemoveAuthToken,
    });
    // TODO: Remove Token from local Storage if necessary
  };

  const handleLogoutFailure = (): void => {
    alert('Logout failed!');
  };

  return (
    <div>
      {state.authenticated ? (
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
