import React, { useState, useEffect } from 'react';
import { Announcement } from '../types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// TODO: Implement date formatting to local time. (For broader use)
// TODO: Stucture and Style announcement paper

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const classes = useStyles();
  const getAnnouncements = async () => {
    const { data } = await axios.get('/api/announcements');
    setAnnouncements(data);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);
  return (
    <Grid item container spacing={5}>
      {announcements.map((item) => (
        <Paper>
          {item.title}
          {item.author}
          {item.content}
          {item.date.toLocaleString()} {item.category}
        </Paper>
      ))}
    </Grid>
  );
};

export default Announcements;
