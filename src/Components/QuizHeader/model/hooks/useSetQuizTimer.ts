import React, { useEffect, useState } from 'react';
import { DEFAULT_SETTINGS } from '../../../../consts';

interface IUseSetTimerArgs {
    intervalId: React.MutableRefObject<ReturnType<typeof setInterval> | null>,
    currentQuestion: number,
    timeToAnswer: number | null,
    isTimer: boolean | null,
    handleTimerEnd: () => void,
}

export default function useSetQuizTimer({
  intervalId, timeToAnswer, isTimer, currentQuestion, handleTimerEnd,
}: IUseSetTimerArgs) {
  const { TIME_TO_ANSWER } = DEFAULT_SETTINGS;
  const [time, setTime] = useState(timeToAnswer || TIME_TO_ANSWER);

  useEffect(() => {
    if (time === 0) {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
      handleTimerEnd();
    }
  }, [time]);

  useEffect(() => () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  }, []);

  useEffect(() => {
    if (!intervalId.current && isTimer) {
      // eslint-disable-next-line no-param-reassign
      intervalId.current = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
    setTime(timeToAnswer || TIME_TO_ANSWER);
  }, [currentQuestion]);

  return time;
}
