import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#538cef',
    },
  },
  typography: {
    fontFamily: ['Karla '].join(','),
  },
});

export default theme;
