import React, { useEffect, useState } from 'react';

const DateTime: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timeDate: string = new Date().toLocaleString();
      setTime(timeDate);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div>
      {time}
    </div>
  )
}

export default DateTime;
