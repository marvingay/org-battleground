import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
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
  const { state } = useContext(GlobalContext);

  // TODO: Fix Icon spacing
  return (
    <Grid container item spacing={0} className={classes.topNav}>
      <Grid item xs={4}>
        <Typography className={classes.title} variant='h1'>
          {state.meta.title}
        </Typography>
      </Grid>
      <Grid item xs={4} />
      <Grid item wrap='nowrap' xs={4}>
        <NavBell />
        <Button>
          <PersonIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopNavBar;
