import React from 'react';
import { TDataArr } from '../../../types';

export function getCategories(
  data: TDataArr,
  categoriesSetter: React.Dispatch<React.SetStateAction<string[]>>,
) {
  categoriesSetter([...new Set(...[data.map((item) => item.category)])]);
}

export function getTrueAnswers(answersArr: boolean[] | null) {
  return answersArr?.filter((item) => item)
    .length || null;
}
