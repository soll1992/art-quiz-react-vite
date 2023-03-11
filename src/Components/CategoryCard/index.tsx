import { Link } from 'react-router-dom';
import { assetsQuizPath, QUESTION_CATEGORI_COUNT } from 'consts';
import { TDataArr } from 'types';
import css from './styles.module.scss';
import LoadedImg from '../LoadedImg';
import getCurrentImg from './model';

interface IProps {
  title: string;
  quizType: string | undefined;
  userTrueAnswers: number | null;
  data: TDataArr;
}

export default function CategoryCard({
  title,
  quizType,
  userTrueAnswers,
  data,
}: IProps) {
  const haveScore = !!userTrueAnswers || userTrueAnswers === 0;
  const currentImg = getCurrentImg(data, title, quizType);

  return (
    <div className={css.card}>
      <Link className={css.card_link} to={`/${quizType}/${title}`}>
        <header className={css.card__header}>
          <div className={css.card__header_title}>{title}</div>
          {haveScore && (
            <div className={css.card__header_score}>
              {`${userTrueAnswers}/${QUESTION_CATEGORI_COUNT}`}
            </div>
          )}
        </header>
        <main className={css.card__body}>
          <LoadedImg
            greyColor={!haveScore}
            src={`${assetsQuizPath}/${currentImg.imageNum}.webp`}
            alt={currentImg.name}
          />
        </main>
      </Link>
      <footer className={css.card__footer}>
        {haveScore && (
          <Link className={css.card_link} to={`/${quizType}/${title}/score`}>
            <div className={css.card__footer__text}>Show last score</div>
          </Link>
        )}
      </footer>
    </div>
  );
}
