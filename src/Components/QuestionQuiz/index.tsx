import cn from 'classnames';
import { assetsQuizPath } from 'consts';
import ErrorPage from 'pages/ErrorPage';
import { TSettings } from 'types';
import useCurrentQuizData from 'utils/hooks/useCurrentQuizData';
import pathValidation from 'utils/pathValidation';
import getLocalStorageVal from 'utils/getLocalStorageVal';
import AnswerButton from '../AnswerButton';
import QuizEndgameModal from '../QuizEndgameModal';
import QuizHeader from '../QuizHeader';
import QuizModal from '../QuizModal';
import css from './styles.module.scss';
import useCreateQuestionQuiz from './model/useCreateQuestionQuiz';

export default function QuestionQuiz() {
  const {
    volume, mute, timeToAnswer, isTimer,
  }: TSettings = getLocalStorageVal('quiz_settings');

  const {
    currentQuizData,
    quiz,
    category,
    isLoading,
  } = useCurrentQuizData();

  const {
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
  } = useCreateQuestionQuiz({
    currentQuizData, volume, quiz, category, mute,
  });

  if (pathValidation(currentQuizData, category, isLoading, 'category')) {
    return <ErrorPage />;
  }

  return (
    <div className={css.quiz}>
      <QuizHeader
        intervalId={intervalId}
        currentQuestion={currentQuestion}
        handleTimerEnd={() => handleTimerEnd()}
        timeToAnswer={timeToAnswer}
        isTimer={isTimer}
      />
      <main className={css.quiz__main}>
        <div>
          {quiz === 'pictures'
            ? `Which is ${currentQuizData[currentQuestion]?.author} picture?`
            : 'Who is the author of this picture?'}
        </div>
        {quiz === 'artist' && (
        <div className={css.quiz__main__question}>
          {currentQuizData.length && (
          <img
            className={css.quiz__main__question__image}
            src={`${assetsQuizPath}/${currentQuizData[currentQuestion]?.imageNum}.webp`}
            alt={currentQuizData[currentQuestion]?.name}
          />
          )}
        </div>
        )}
        <div
          className={cn(css.quiz__main__answers, {
            _pic: quiz === 'pictures',
            _art: quiz === 'artist',
          })}
        >
          {answersArr.map((answer) => (
            <AnswerButton
              onClick={() => answerHandler(answer)}
              key={answer.imageNum}
            >
              {quiz === 'pictures' ? (
                <img
                  className={css.quiz__main__answers_img}
                  src={`${assetsQuizPath}/${answer.imageNum}.webp`}
                  alt={answer.imageNum}
                />
              ) : (
                <div className={css.quiz__main__answers_author}>
                  {answer.author}
                </div>
              )}
            </AnswerButton>
          ))}
        </div>
      </main>
      <QuizModal
        isVisible={isShowModal}
        userAnswer={userAnswer[currentQuestion]}
        onClick={() => modalClickHandler()}
        answerData={currentTrueAnswer}
      />
      <QuizEndgameModal
        isVisible={isEndGame}
        trueAnswers={userAnswer.filter((item) => item).length}
      />
    </div>
  );
}
