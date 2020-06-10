import React, { useState } from 'react';
import { announcements, Announcement } from '../data/announcements';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

const Announcements: React.FC = () => {
  const [news, setNews] = useState<Announcement[]>([...announcements]);
  const classes = useStyles();
  return (
    <Grid item container spacing={5}>
      {news.map((item) => (
        <Grid item xs={9} md={7}>
          <Paper elevation={5} className={classes.paper}>
            {item.title}
            {item.author}
            {item.body}
            {item.date}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Announcements;
