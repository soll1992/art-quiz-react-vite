import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TDataArr } from 'types';
import useFeatchData from './useFeatchData';

export default function useCurrentQuizData() {
  const [currentQuizData, setCurrentQuizData] = useState<TDataArr>([]);

  const { quizData } = useFeatchData();

  const { quiz, category } = useParams();

  useEffect(() => {
    if (quizData.length) {
      const currentData = quizData.filter(
        (item) => item.quiz === quiz && item.category === category,
      );
      setCurrentQuizData(currentData);
    }
  }, [quizData]);

  return {
    currentQuizData,
    quiz,
    category,
  };
}
