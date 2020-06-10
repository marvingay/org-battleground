import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

const DateTime: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleString());


  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timeDate: string = new Date().toLocaleString();
      setTime(timeDate);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <Typography variant='subtitle2' gutterBottom>
      {time}
    </Typography>
  )
}

export default DateTime;
