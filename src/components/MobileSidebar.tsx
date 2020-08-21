import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { navItem } from '../navigation';
import { Types } from '../types';
// Styles
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles';
// Components
import DateTime from './DateTime';
import GoogleButton from './GoogleButton';
import Logo from './Logo';
import NavItem from './NavItem';
import UserNav from './UserNav';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
    overflowX: 'hidden',
  },
  bottom: {
    position: 'absolute',
    bottom: '10px',
    margin: '0 auto',
  },
}));

const MobileSidebar: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);

  const closeMobileMenu = () => {
    dispatch({
      type: Types.ToggleMobileMenu,
      payload: {
        ...state.meta,
        mobileMenu: !state.meta.mobileMenu
      }
    })
  }

  return (
    <Drawer
      anchor='right'
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      onClose={closeMobileMenu}
      open

    >
      <Logo />
      <UserNav />
      <List>
        {navItem.map((item, idx) => (
          <NavItem
            key={`${Math.floor(Math.random() * 1000000 * idx)}`}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </List>
      <GoogleButton />
      <DateTime />
    </Drawer>
  );
};

export default MobileSidebar;
