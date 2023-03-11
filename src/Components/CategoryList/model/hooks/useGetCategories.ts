import { useEffect, useState } from 'react';
import { TDataArr } from 'types';
import { getCategories } from '../index';

export default function useGetCategories(quizData: TDataArr) {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    if (quizData.length) {
      getCategories(quizData, setCategories);
    }
  }, [quizData]);
  return { categories };
}
