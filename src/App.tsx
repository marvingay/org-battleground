import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { GlobalProvider } from './context/GlobalState';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Sidebar />
      <Home />
    </GlobalProvider>
  );
};

export default App;
