import React, { useState, useEffect } from 'react';
import { Announcement } from '../types';
import axios from 'axios';
import AnnouncementItem from './AnnouncementItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  container: {
    marginTop: '40px',
  },
});
const Announcements: React.FC = () => {
  const classes = useStyles();

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const getAnnouncements = async () => {
    const { data } = await axios.get('/api/announcements');
    setAnnouncements(data);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);
  return (
    <Container className={classes.container}>
      <Grid item container spacing={5}>
        {announcements.map((item) => (
          <AnnouncementItem announcement={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Announcements;
