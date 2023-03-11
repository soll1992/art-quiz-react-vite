import React, { useEffect, useState } from 'react';
import { API_URL } from 'consts';
import { TDataArr } from 'types';

export default function useFeatchData() {
  const [quizData, setQuizData] = useState<TDataArr>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function featchData(
    dataSetter: React.Dispatch<React.SetStateAction<TDataArr>>,
  ) {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const data: TDataArr = await response.json();
      dataSetter(data);
      setIsLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  useEffect(() => {
    featchData(setQuizData);
  }, []);

  return {
    quizData,
    isLoading,
  };
}
