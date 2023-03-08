import { useEffect } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';
import { TDataItem } from '../../types';
import { assetsQuizPath } from '../../consts';

interface IProps {
    isVisible: boolean,
    userAnswer: boolean,
    answerData: TDataItem | null,
    onClick: () => void,
}

export default function QuizModal({
  isVisible, userAnswer, onClick, answerData,
}: IProps) {
  const keydownHandler = ({ key }: {key: string}) => {
    if (key === 'Enter') {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className={css.modal}>
      <div className={css.modal__dialog}>
        <div className={css.modal__header}>
          <h3 className={cn(css.modal__title, {
            _green: userAnswer,
          })}
          >
            {`${userAnswer.toString().toUpperCase()}!`}
          </h3>
        </div>
        <div className={css.modal__body}>
          <div className={css.modal__content}>
            <img className={css.modal__content_image} src={`${assetsQuizPath}/${answerData?.imageNum}.webp`} alt={answerData?.name} />
            <h3 className={css.modal__content_author}>{answerData?.author}</h3>
            <div>{answerData?.year}</div>
            <div>{answerData?.name}</div>
          </div>
          <button className={css.modal__body_button} type="button" onClick={onClick}>NEXT</button>
        </div>
      </div>
    </div>
  );
}
