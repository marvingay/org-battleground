import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';

const Home: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        ...state,
        meta: { ...state.meta, title: 'Home' },
      },
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Work in progress</div>;
};

export default Home;
