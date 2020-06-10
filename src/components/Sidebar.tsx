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
import NavItem from './NavItem';
import DateTime from './DateTime';
import { navItem } from '../navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RLink,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
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
    <Router>
      <Hidden smDown>
        <Grid item md={3}>
          <Drawer open variant='permanent'>
            <Container className={classes.logo}>
              <Typography variant='h4' gutterBottom>
                ORG BG
              </Typography>
            </Container>

            <Container className={classes.user}>
              <Typography variant='h5' display='block' gutterBottom>
                Username
              </Typography>
            </Container>

            <List className={classes.sideBar}>
              {navItem.map((item, idx) => (
                <NavItem key={`id${idx}`} text={item.text} icon={item.icon} />
              ))}
            </List>
            <Container id='DateTime'>
              <DateTime />
            </Container>
          </Drawer>
        </Grid>
      </Hidden>
    </Router>
  );
};

export default Sidebar;
