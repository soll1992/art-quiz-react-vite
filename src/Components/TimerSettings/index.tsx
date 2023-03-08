import { memo } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';

interface IProps {
  timeForAnswer: number,
  timeForAnswerHandler: (buttonVal: string) => void,
}

function TimerSettings({
  timeForAnswer, timeForAnswerHandler,
}: IProps) {
  return (
    <div className={css.time_answer}>
      <main className={css.time_answer_input_body}>
        <button type="button" onClick={() => timeForAnswerHandler('plus')} className={cn(css.time_button, css.plus)}>
          +
        </button>
        <input className={css.time_input} type="number" value={timeForAnswer} readOnly />
        <button type="button" onClick={() => timeForAnswerHandler('minus')} className={cn(css.time_button, css.minus)}>
          -
        </button>
      </main>
    </div>
  );
}

export default memo(TimerSettings);
