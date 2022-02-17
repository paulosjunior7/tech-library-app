import React, { useState, useEffect } from 'react';

import { ClockBase, Hour, Minute } from './styles';

const Clock = () => {
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      getHour();
    }, 1000);
  },[])
  
  const getHour = async () => {
    const m = new Date().getMinutes() + (s / 6);
    const h = new Date().getHours() * 30 + (m / 12);
    setMinute(m);
    setHour(h);
  };

  return (
    <ClockBase>
      <Hour rotateHour={hour} />
      <Minute rotateMinute={minute} />
    </ClockBase>
  );
}
export default Clock;
