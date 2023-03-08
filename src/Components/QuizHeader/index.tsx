import React from 'react';
import useSetQuizTimer from './model/hooks/useSetQuizTimer';
import css from './styles.module.scss';

interface IProps {
  intervalId: React.MutableRefObject<ReturnType<typeof setInterval> | null>,
  currentQuestion: number,
  timeToAnswer: number | null,
  isTimer: boolean | null,
  handleTimerEnd: () => void,
}

export default function QuizHeader({
  intervalId, currentQuestion, isTimer, timeToAnswer, handleTimerEnd,
}: IProps) {
  const time = useSetQuizTimer({
    intervalId, currentQuestion, isTimer, timeToAnswer, handleTimerEnd,
  });

  return (
    <header className={css.quiz__header}>
      {isTimer && <div className={css.quiz__header_timer}>{time}</div>}
    </header>
  );
}
