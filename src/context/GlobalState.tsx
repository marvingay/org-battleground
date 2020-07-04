import React, { createContext, useReducer } from 'react';
import { InitialStateType, Props } from './types';
import GlobalReducer from './GlobalReducer';

// initial state
const initialState: InitialStateType = {
  authenticated: false,
  authToken: '',
  showDisplayForm: false,
  user: '',
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
