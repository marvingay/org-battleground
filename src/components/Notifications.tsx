import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import axios from 'axios';

// TODO: Remove Notifcations component, put logic into TopNavBar

const Notifications: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const getNotifications = async () => {
    const { data } = await axios.post('/api/notifications', {
      user: state.user.name,
      action: 'GET',
    });
    console.log(data);
    dispatch({
      type: Types.SetNotifications,
      payload: {
        notifications: data,
      },
    });
  };
  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: { meta: { ...state.meta, title: 'Notifications' } },
    });
    getNotifications();
  }, []);
  return (
    <div>
      {state.user.notifications.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
};

export default Notifications;
