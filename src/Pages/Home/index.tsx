import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import SettingsButton from '../../Components/SettingsButton';
import { AppRoutes, QuizPathes } from '../../consts';
import css from './styles.module.scss';

function Home() {
  const navigation = useNavigate();

  const artClickHandler = () => {
    navigation(QuizPathes.Artist);
  };

  const pictureClickHandler = () => {
    navigation(QuizPathes.Pictures);
  };

  const todayPictureClickHandler = () => {
    navigation(AppRoutes.Today);
  };

  return (
    <>
      <div className={css.main_bg} />
      <div className={css.main_content}>
        <div className={css.settings_wrapper}>
          <SettingsButton />
        </div>
        <div className={css.logo} />
        <div className={css.quiz_buttons}>
          <Button text="Picture of the day" onClick={todayPictureClickHandler} />
          <Button text="Artist quiz" onClick={artClickHandler} />
          <Button text="Picture quiz" onClick={pictureClickHandler} />
        </div>
      </div>
    </>

  );
}

export default Home;
