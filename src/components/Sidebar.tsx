import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Drawer,
  Grid,
  Hidden,
  List,
  Typography,
} from '@material-ui/core';
import Logo from './Logo';
import NavItem from './NavItem';
import DateTime from './DateTime';
import GoogleButton from './GoogleButton';
import { navItem } from '../navigation';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
  },
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
    overflowX: 'hidden',
  },
  user: {
    padding: theme.spacing(2),
  },
  sideBar: {
    padding: theme.spacing(2),
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
          <Container className={classes.user}>
            <Typography variant='h5' display='block' gutterBottom>
              Username
            </Typography>
          </Container>

          <List className={classes.sideBar}>
            {navItem.map((item, idx) => (
              <NavItem
                key={`${Math.floor(Math.random() * 1000000 * idx)}`}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </List>
          <GoogleButton />
          <Container id='DateTime'>
            <DateTime />
          </Container>
        </Drawer>
      </Grid>
    </Hidden>
  );
};

export default Sidebar;
