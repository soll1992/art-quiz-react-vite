import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes, QuizPathes } from '../../consts';
import SettingsButton from '../SettingsButton';
import css from './styles.module.scss';

interface IProps {
  mode?: string,
}

export default function Header({ mode }: IProps) {
  const activeStyles = useMemo(
    () => (bool: boolean) => (bool
      ? css.header__navigation__link__active
      : css.header__navigation__link),
    [],
  );

  return (
    <div className={css.header}>
      <nav className={css.header__navigation}>
        <NavLink
          className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)}
          to={AppRoutes.Root}
        >
          <div className={css.header__navigation__logo} />
        </NavLink>
        <div className={css.header__navigation__page_links}>
          <NavLink
            className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)}
            to={QuizPathes.Artist}
          >
            Artist quiz
          </NavLink>
          <NavLink
            className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)}
            to={QuizPathes.Pictures}
          >
            Picture quiz
          </NavLink>
        </div>

        <div className={css.header__navigation__settings}>
          {!mode && <SettingsButton />}
        </div>
      </nav>
    </div>
  );
}
