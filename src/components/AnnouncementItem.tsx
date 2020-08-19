import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Announcement } from '../types';
import { formatRelative } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '65vw',
    minHeight: 160,
  },
  container: {
    padding: '20px',
  },
  item: {
    margin: '10px 0',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 400,
  },
  body: {
    fontSize: '1.15rem',
  },
}));

const AnnouncementItem: React.FC<{ announcement: Announcement }> = ({
  announcement,
}) => {
  const { title, content, author, category, date } = announcement;
  const currentDate = new Date();
  const annDate = new Date(date);
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.paper} elevation={5}>
        <Grid className={classes.container} container>
          <Grid className={classes.item} item xs={12}>
            <Typography className={classes.title} variant='h2'>
              {title}
            </Typography>
            <Typography variant='subtitle1'>by {author}</Typography>
          </Grid>
          <Grid className={classes.item} item xs={12}>
            <Typography className={classes.body} variant='body1'>
              {content}
            </Typography>
          </Grid>
          <Grid className={classes.item} item xs={12} md={8}>
            <Typography variant='subtitle1'>Category: {category}</Typography>
          </Grid>
          <Grid className={classes.item} item xs={12} md={4}>
            <Typography variant='subtitle1'>
              {formatRelative(annDate, currentDate)}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AnnouncementItem;
