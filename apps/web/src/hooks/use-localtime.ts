import { useState, useEffect } from 'react';
import { format, getTime } from 'date-fns';

export const useLocalTime = () => {
  const formatString = 'K:mm';

  const [localTime, setLocalTime] = useState({
    time: format(getTime(new Date()), formatString),
    period: format(getTime(new Date()), 'aa'),
  });
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime({
        time: format(getTime(new Date()), formatString),
        period: format(getTime(new Date()), 'aa'),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return { localTime, timeZone };
};
