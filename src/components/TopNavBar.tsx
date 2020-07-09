import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  topNav: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
  },
}));

const TopNavBar: React.FC = () => {
  const classes = useStyles();
  const { state } = useContext(GlobalContext);

  return (
    <Grid container item spacing={0} className={classes.topNav}>
      <Grid item xs={4}>
        <Typography variant='h5'>{state.meta.title}</Typography>
      </Grid>
      <Grid item xs={5} />
      <Grid item>
        <NotificationsIcon />
      </Grid>
      <Grid item>
        <PersonIcon />
      </Grid>
    </Grid>
  );
};

export default TopNavBar;
