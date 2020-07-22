import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CLIENT_ID } from '../utilities/config';
import axios from 'axios';
import { Types } from '../types';
import { makeStyles } from '@material-ui/core/styles';

const width = '120px';
const margin = '60px auto 10px auto';
const height = '45px';
const useStyles = makeStyles((theme) => ({
  container: {
    margin,
  },
  logout: {
    height,
    width,
  },
  login: {
    height,
    width,
  },
}));

const GoogleButton: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const classes = useStyles();

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
          payload: { name: `${data.displayName}` },
        });

        if (status === 201) {
          dispatch({
            type: Types.ShowDisplayForm,
            payload: { showDisplayForm: true },
          });
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
    <div className={classes.container}>
      {state.authenticated ? (
        <GoogleLogout
          className={classes.logout}
          clientId={CLIENT_ID}
          buttonText='Logout'
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
      ) : (
        <GoogleLogin
          className={classes.login}
          clientId={CLIENT_ID}
          onSuccess={onLogin}
          onFailure={handleLoginFailure}
          isSignedIn={true}
          buttonText='Log In'
        />
      )}
    </div>
  );
};

export default GoogleButton;
