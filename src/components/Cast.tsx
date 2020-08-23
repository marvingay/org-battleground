import React from 'react';
import { castMembers } from '../data/cast';
// Styles
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px 0',
  },
  cast: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.50rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0'
  },


}))

const Cast: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container justify='center'>
      <Grid item xs={12}>
        <Typography className={classes.title} variant='h2'>ORGBG: Battle of the Superfans Cast</Typography>
      </Grid>
      {
        castMembers.map(member => (
          <Grid key={member} xs={3} item>
            <Typography className={classes.cast} variant='body1'>{member}</Typography>
          </Grid>
        ))
      }

    </Grid>
  )
}

export default Cast;