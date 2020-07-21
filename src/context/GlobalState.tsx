import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import { InitialStateType, Props } from '../types';

// initial state
const initialState: InitialStateType = {
  authenticated: false,
  authToken: '',
  showDisplayForm: false,
  showMsgForm: false,
  user: {
    name: '',
    messages: [],
    threads: [],
    activeThread: [],
    notifications: [],
  },
  meta: { title: '' },
  announcements: [],
};

// create context
const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

// provider
const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
