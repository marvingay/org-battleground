import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CLIENT_ID } from '../services/config';
import axios from 'axios';
import { Types } from '../types';

const GoogleButton: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const onLogin = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    response = response as GoogleLoginResponse;
    if (response.tokenId) {
      try {
        // Send OAuth Token to Backend for verification
        const { data, status } = await axios.post(
          '/auth',
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
          type: Types.SetUser,
          payload: { user: `${data.displayName}` },
        });

        if (status === 201) {
          dispatch({
            type: Types.ShowDisplayForm,
            payload: { showDisplayForm: true },
          });
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

  const logout = async () => {
    try {
      await axios.get('/auth/logout');
      dispatch({
        type: Types.RemoveAuthenticated,
      });
      dispatch({
        type: Types.RemoveUser,
      });
    } catch (error) {
      console.log(error);
    }
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
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default GoogleButton;
