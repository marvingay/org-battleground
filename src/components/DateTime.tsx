import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  clock: {
    margin: '0 auto',
    fontWeight: 'bold',
  },
}));

const DateTime: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const classes = useStyles();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timeDate: string = new Date().toLocaleString();
      setTime(timeDate);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <Typography className={classes.clock} variant='subtitle2' gutterBottom>
      {time}
    </Typography>
  );
};

export default DateTime;
