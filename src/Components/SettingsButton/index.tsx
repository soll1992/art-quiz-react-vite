import React from 'react';
import { Link } from 'react-router-dom';
import css from './styles.module.scss';

function SettingsButton() {
  return (
    <Link className={css.settings_link} to="/settings" />
  );
}

export default SettingsButton;
