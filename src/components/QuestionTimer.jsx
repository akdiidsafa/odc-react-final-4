
import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onTimeout) {
        onTimeout();
      }
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} className={`progress-bar ${mode}`}  />
  );
}

