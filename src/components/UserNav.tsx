import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  username: {
    fontSize: '1.2rem',
    fontWeight: 400,
    margin: '10px auto',
  },
}));

const UserNav: React.FC = () => {
  const classes = useStyles();
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <Divider />
      <Container>
        <Typography
          className={classes.username}
          variant='h3'
          display='block'
          gutterBottom
        >
          {state.user ? state.user : `Welcome!`}
        </Typography>
      </Container>
      <Divider />
    </div>
  );
};

export default UserNav;
