import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types, Announcement, } from '../types';
// Components
import AnnouncementItem from './AnnouncementItem';
import Cast from './Cast';
// Styles
import Container from '@material-ui/core/Container';

const Home: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | undefined>();

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        title: 'Home',
      },
    }); // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if (state.announcements.length) setCurrentAnnouncement(state.announcements[0]);
  }, [state.announcements])

  return (
    <Container>
      {currentAnnouncement ? <AnnouncementItem announcement={currentAnnouncement} /> : null}
      <Cast />
    </Container>
  )
};

export default Home;
