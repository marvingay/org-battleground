import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';

const Home: React.FC = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        title: 'Home',
      },
    }); // eslint-disable-next-line 
  }, []);
  return <div>Work in progress</div>;
};

export default Home;
