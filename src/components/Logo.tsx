import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: '1.5rem',
    fontWeight: 400,
    margin: '0 auto',
    padding: '20px 15px',
    overflowWrap: 'normal',
  },
}));

const Logo: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.logo} variant='h2' display='block'>
      ORG BATTLEGROUND
    </Typography>
  );
};

export default Logo;
