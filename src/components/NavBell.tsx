import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import axios from 'axios';
import { API_URL } from '../utilities/config';
// Styles
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '20px',
  },
  menu: {
    maxHeight: '240px',
  }
}));

const NavBell: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  const handleEnter = async () => {
    if (state.user.notificationCount !== 0) {

      try {
        await axios.post(`${API_URL}/api/notifications`, {
          action: 'READ',
          user: state.user.name,
        });
        dispatch({
          type: Types.SetNotificationCount,
          payload: { notificationCount: 0 },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid item>
      <Tooltip title='Notifications'>
        <Button className={classes.icon} onClick={handleClick}>
          <Badge badgeContent={state.user.notificationCount} color='secondary' >
            <NotificationsIcon fontSize='large' />
          </Badge>
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        className={classes.menu}
        keepMounted
        onClose={handleClose}
        onEnter={handleEnter}
        open={open}
      >
        {state.user.notifications.length ? state.user.notifications.map((notif) => {
          return (
            <MenuItem key={notif.id} onClick={handleClose}>
              {notif.message}
            </MenuItem>
          );
        })
          : <MenuItem onClick={handleClose}>No Notifications</MenuItem>
        }
      </Menu>
    </Grid>
  );
};

export default NavBell;
