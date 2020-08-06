import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';

const Help: React.FC = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        title: 'Help'
      },
    });
  }, [dispatch]);
  return (<div>Work in progress</div>)
}

export default Help;