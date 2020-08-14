import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types, Announcement, } from '../types';
import AnnouncementItem from './AnnouncementItem';

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

  return <div>
    {currentAnnouncement ? <AnnouncementItem announcement={currentAnnouncement} /> : null}
  </div>;
};

export default Home;
