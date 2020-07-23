import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Main />
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
