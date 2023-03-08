import getAnswersArr from '../../utils/checkTrueAnswersCount';
import getScoreObject from '../../utils/getScoreObj';
import useCurrentQuizData from '../../utils/hooks/useCurrentQuizData';
import ScoreItem from '../ScoreItem';
import css from './styles.module.scss';

export default function ScoreList() {
  const { currentQuizData, quiz, category } = useCurrentQuizData();
  const userScoreObj = getScoreObject();

  return (
    <div className={css.score__list}>
      {currentQuizData.map((item, index) => (
        <ScoreItem
          isTrueAnswer={Boolean(getAnswersArr(userScoreObj, quiz, category)?.[index])}
          data={item}
          key={item.imageNum}
        />

      ))}
    </div>
  );
}
