import VolumeSettings from '../VolumeSettings';
import TimerSettings from '../TimerSettings';
import MuteButton from '../MuteButton';
import TimerSwitch from '../TimerSwitch';
import css from './styles.module.scss';
import useSettingsData from './model/hooks/useSettingsData';

export default function SettingsForm() {
  const {
    formik, onClickMuteHandler, onChangeVolumeHandler, timeForAnswerHandler, timerClickHandler,
  } = useSettingsData();

  return (
    <form className={css.settings_form}>
      <h2>Volume</h2>
      <VolumeSettings
        volumeValue={formik.values.volume}
        muteValue={formik.values.mute}
        onChangeVolumeHandler={onChangeVolumeHandler}
      />
      <div className={css.settings_form_mute}>
        <MuteButton
          muteValue={formik.values.mute}
          onClickMuteHandler={onClickMuteHandler}
        />
      </div>
      <h2 className={css.settings_form_title}>Time game</h2>
      <TimerSwitch timer={formik.values.isTimer} timerClickHandler={timerClickHandler} />
      <h2 className={css.settings_form_title}>Time to answer</h2>
      <TimerSettings
        timeForAnswer={formik.values.timeToAnswer}
        timeForAnswerHandler={timeForAnswerHandler}
      />
    </form>
  );
}
