import { useState, useEffect } from 'react';
import { format, getTime } from 'date-fns';
import { format as formatTimezone } from 'date-fns-tz';

export const useLocalTime = (userTimezone?: string) => {
  const formatString = 'h:mm';

  const [localTime, setLocalTime] = useState({
    time: format(getTime(new Date()), formatString),
    period: format(getTime(new Date()), 'aa'),
  });
  const timezone =
    userTimezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime({
        time: format(getTime(new Date()), formatString),
        period: format(getTime(new Date()), 'aa'),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return {
    localTime,
    timezone: formatTimezone(new Date(), 'z', { timeZone: timezone }),
  };
};
