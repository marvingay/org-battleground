import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Sidebar />
      <Main />
    </GlobalProvider>
  );
};

export default App;
