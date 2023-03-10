import { assetsSvgPath } from 'consts';
import css from './styles.module.scss';

export default function ErrorPage() {
  return (
    <main className={css.error}>
      <img className={css.error__img} src={`${assetsSvgPath}/404.svg`} alt="404" />
    </main>
  );
}
