import { memo } from 'react';
import css from './styles.module.scss';

interface IProps {
  timer: boolean,
  timerClickHandler: () => void,
}

function TimerSwitch({
  timer, timerClickHandler,
}: IProps) {
  return (
    <div className={css.toggle_container}>
      <label htmlFor="toggle-button" className={css.toggle_text}>
        On
      </label>
      <input
        type="checkbox"
        id="toggle-button"
        className={css.toggle_button}
        readOnly
        checked={timer}
        onClick={() => timerClickHandler()}
      />
    </div>
  );
}

export default memo(TimerSwitch);
