import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Hidden } from '@material-ui/core';
// Components
import MobileMenuIcon from './MobileMenuIcon';
import NavBell from './NavBell';

const useStyles = makeStyles((theme) => ({
  topNav: {
    padding: '20px',
    margin: theme.spacing(1),
  },
  title: {
    fontSize: '1.7rem',
  },
  icon: {
    width: '20px',
  },
}));

const TopNavBar: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);

  const openMobileMenu = () => {
    dispatch({
      type: Types.ToggleMobileMenu,
      payload: {
        ...state.meta,
        mobileMenu: !state.meta.mobileMenu
      }
    })
  }

  return (
    <Grid className={classes.topNav} container item justify='space-between' spacing={0} >
      <Grid item xs={4}>
        <Typography className={classes.title} variant='h1'>
          {state.meta.title}
        </Typography>
      </Grid>
      <Grid container justify='flex-end' item xs={4}>
        <NavBell />
        <Hidden mdUp>
          <MobileMenuIcon callback={openMobileMenu} />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default TopNavBar;
