import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 auto',
    padding: '20px 15px',
    overflowWrap: 'normal',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
}));

const Logo: React.FC = () => {
  const classes = useStyles();
  return (
    <NavLink className={classes.link} to='/'>
      <Typography className={classes.logo} variant='h2' display='block'>
        ORG BATTLEGROUND
      </Typography>
    </NavLink>
  );
};

export default Logo;
