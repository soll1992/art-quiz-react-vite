import { Link, useParams } from 'react-router-dom';
import { AppRoutes, assetsSvgPath, QUESTION_CATEGORI_COUNT } from 'consts';
import css from './styles.module.scss';

interface IProps {
    isVisible: boolean,
    trueAnswers: number,
}

export default function QuizEndgameModal({ isVisible, trueAnswers }: IProps) {
  const { quiz, category } = useParams();

  return !isVisible ? null : (
    <div className={css.modal}>
      <div className={css.modal__dialog}>
        <div className={css.modal__header}>
          <h3 className={css.modal__title}>
            Great!
          </h3>
        </div>
        <div className={css.modal__body}>
          <img className={css.modal__result_svg} src={`${assetsSvgPath}/result.svg`} alt="result" />
          <div className={css.modal__content}>
            <h2>{`Result: ${trueAnswers}/${QUESTION_CATEGORI_COUNT}`}</h2>
          </div>
          <Link to={AppRoutes.Root}>
            <button className={css.modal__body_button} type="button">Home</button>
          </Link>
          <Link to={`/${quiz}`}>
            <button className={css.modal__body_button} type="button">Categories</button>
          </Link>
          <Link to={`/${quiz}/${category}/score`}>
            <button className={css.modal__body_button} type="button">Score</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
