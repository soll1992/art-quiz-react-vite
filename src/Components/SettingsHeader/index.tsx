import { useNavigate } from 'react-router-dom';
import css from './styles.module.scss';

export default function SettingsHeader() {
  const navigate = useNavigate();

  return (
    <div className={css.header}>
      <button type="button" className={css.header_back} onClick={() => navigate(-1)}>{'< Settings'}</button>
    </div>
  );
}
