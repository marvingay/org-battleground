import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Announcement, Types } from '../types';
import axios from 'axios';
import AnnouncementItem from './AnnouncementItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// TODO: Add ability to filter announcements here or in Nav Bar
const useStyles = makeStyles({
  container: {
    marginTop: '40px',
  },
});
const Announcements: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);

  const getAnnouncements = async (currentAnnouncements: Announcement[]) => {
    const { data } = await axios.get('/api/announcements');
    // Sort Announcements in most recent order
    data.sort((a: Announcement, b: Announcement) => (a.id < b.id ? 1 : -1));
    // Update announcements IF data differs from State
    if (data.length > currentAnnouncements.length) {
      dispatch({
        type: Types.SetAnnouncements,
        payload: { announcements: data },
      });
    }
  };

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        ...state,
        meta: { ...state.meta, title: 'Announcements' },
      },
    });
    getAnnouncements(state.announcements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className={classes.container}>
      <Grid item container spacing={5}>
        {state.announcements.map((item) => (
          <AnnouncementItem key={item.id} announcement={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Announcements;
