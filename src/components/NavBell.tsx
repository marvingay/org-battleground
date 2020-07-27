import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Types } from '../types';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '20px',
  },
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
        await axios.post('/api/notifications', {
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
    <div>
      <Button className={classes.icon} onClick={handleClick}>
        <Badge badgeContent={state.user.notificationCount} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        onEnter={handleEnter}
        open={open}
      >
        {state.user.notifications.map((notif) => {
          return (
            <MenuItem key={notif.id} onClick={handleClose}>
              {notif.message}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default NavBell;
