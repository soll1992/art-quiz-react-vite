import { useParams } from 'react-router-dom';
import ErrorPage from '../../Pages/ErrorPage';
import getAnswersArr from '../../utils/checkTrueAnswersCount';
import getScoreObject from '../../utils/getScoreObj';
import useFeatchData from '../../utils/hooks/useFeatchData';
import pathValidation from '../../utils/pathValidation';
import CategoryCard from '../CategoryCard';
import { getTrueAnswers } from './model';
import useGetCategories from './model/hooks/useGetCategories';
import css from './styles.module.scss';

export default function CategoryList() {
  const { quiz } = useParams();
  const { quizData } = useFeatchData();
  const userScoreObj = getScoreObject();
  const { categories } = useGetCategories(quizData);

  if (pathValidation(quizData, quiz, 'quiz')) {
    return <ErrorPage />;
  }

  return (
    <div className={css.category__list}>
      {categories.map((category) => (
        <CategoryCard
          title={category}
          data={quizData}
          quizType={quiz}
          key={category}
          userTrueAnswers={getTrueAnswers(getAnswersArr(userScoreObj, quiz, category))}
        />
      ))}
    </div>
  );
}
