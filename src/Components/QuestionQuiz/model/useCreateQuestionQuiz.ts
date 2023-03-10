import {
  useMemo, useRef, useState,
} from 'react';
import { TDataArr, TDataItem } from 'types';
import useSounds from 'utils/hooks/useSounds';
import shuffleArr from 'utils/shaffleArr';

interface IProps {
    currentQuizData: TDataArr,
    quiz?: string,
    category?: string,
    volume: number | null,
    mute: boolean | null,
}

export default function useCreateQuestionQuiz({
  currentQuizData, volume, quiz, category, mute,
}: IProps) {
  const [userAnswer, setUserAnswer] = useState<boolean[]>([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isEndGame, setIsEndGame] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentTrueAnswer, setCurrentTrueAnswer] = useState<TDataItem | null>(
    null,
  );

  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const { playTrue, playFalse, playResult } = useSounds(volume);

  function modalClickHandler() {
    const dataLength = currentQuizData.length;
    if (currentQuestion < dataLength - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
    setIsShowModal(false);
    if (intervalId.current) {
      intervalId.current = null;
    }
    if (currentQuestion === currentQuizData.length - 1) {
      if (!mute) {
        playResult();
      }
      setIsEndGame(true);
      const quizScore = localStorage.getItem('quiz_score');
      const scoreObj: Record<string, Record<string, boolean[]>> = quizScore
        ? JSON.parse(quizScore)
        : {};
      if (quiz && category) {
        const quizObjCopy = scoreObj[quiz] || {};
        quizObjCopy[category] = userAnswer;
        const scoreObjString = JSON.stringify({
          ...scoreObj,
          [quiz]: { ...quizObjCopy },
        });
        localStorage.setItem('quiz_score', scoreObjString);
      }
    }
  }

  function createAnswers(data: TDataArr, currentQuestionNumber: number) {
    const currentItem = data[currentQuestionNumber];
    setCurrentTrueAnswer(currentItem);
    const shaffledArr = shuffleArr(data)
      .filter((item) => item.imageNum !== currentItem.imageNum)
      .splice(0, 3);
    return currentItem ? shuffleArr([currentItem, ...shaffledArr]) : [];
  }

  function handleTimerEnd() {
    setIsShowModal(true);
    setUserAnswer((prev) => [...prev, false]);
  }

  const answersArr = useMemo(
    () => createAnswers(currentQuizData, currentQuestion),
    [currentQuizData, currentQuestion],
  );

  function answerHandler(dataItem: TDataItem) {
    if (dataItem.imageNum === currentTrueAnswer?.imageNum) {
      setUserAnswer((prev) => [...prev, true]);
      if (!mute) {
        playTrue();
      }
    } else {
      setUserAnswer((prev) => [...prev, false]);
      if (!mute) {
        playFalse();
      }
    }
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setIsShowModal(true);
  }

  return {
    currentQuestion,
    intervalId,
    answersArr,
    isShowModal,
    currentTrueAnswer,
    isEndGame,
    userAnswer,
    modalClickHandler,
    answerHandler,
    handleTimerEnd,
  };
}
