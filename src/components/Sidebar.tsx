import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, Hidden, List } from '@material-ui/core';
import Logo from './Logo';
import UserNav from './UserNav';
import NavItem from './NavItem';
import DateTime from './DateTime';
import GoogleButton from './GoogleButton';
import { navItem } from '../navigation';

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

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Grid item md={3}>
        <Drawer
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          variant='permanent'
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
      </Grid>
    </Hidden>
  );
};

export default Sidebar;
