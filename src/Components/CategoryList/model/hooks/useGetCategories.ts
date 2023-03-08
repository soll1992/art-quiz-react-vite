import { useEffect, useState } from 'react';
import { getCategories } from '../index';
import { TDataArr } from '../../../../types';

export default function useGetCategories(quizData: TDataArr) {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    if (quizData.length) {
      getCategories(quizData, setCategories);
    }
  }, [quizData]);
  return { categories };
}
