import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  date: {
    alignSelf: 'end',
  },
  body: {
    marginTop: 10,
  },
}));

const MessageItem: React.FC<{
  displayName: string;
  body: string;
  date: string;
  user: string;
}> = ({ displayName, body, date, user }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container item>
      <Grid
        className={classes.name}
        item
        xs={6}
        style={{ color: user === displayName ? '#d32f2f' : undefined }}
      >
        {displayName}
      </Grid>
      <Grid className={classes.date} item xs={6}>
        {date}
      </Grid>
      <Grid className={classes.body} item xs={12}>
        {body}
      </Grid>
    </Grid>
  );
};

export default MessageItem;
