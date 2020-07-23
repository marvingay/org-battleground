import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

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

  return (
    <Grid container item spacing={0} className={classes.topNav}>
      <Grid item xs={4}>
        <Typography className={classes.title} variant='h1'>
          {state.meta.title}
        </Typography>
      </Grid>
      <Grid item>
        <Button className={classes.icon}>
          <Badge
            badgeContent={state.user.notifications.length}
            color='secondary'
          >
            <NotificationsIcon />
          </Badge>
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <PersonIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopNavBar;
