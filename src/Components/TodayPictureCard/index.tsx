import { useState } from 'react';
import css from './styles.module.scss';
import LoadedImg from '../LoadedImg';
import useFeatchData from '../../utils/hooks/useFeatchData';
import FullPictureModal from '../FullPictureModal';
import { dayOfYear, getTodayPictureNumber } from './model';
import { assetsQuizPath } from '../../consts';

export default function TodayPictureCard() {
  const { quizData } = useFeatchData();
  const currentPicture = getTodayPictureNumber(quizData, dayOfYear);
  const currentData = quizData[currentPicture];
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className={css.card}>
        <div
          role="presentation"
          className={css.card__image_wrapper}
          onClick={() => setIsShowModal((prev) => !prev)}
        >
          {currentData && (
            <LoadedImg
              src={`${assetsQuizPath}/${currentData?.imageNum}.webp`}
              alt={currentData?.name}
              big
            />
          )}
        </div>
        <h3>{currentData?.author}</h3>
        <div className={css.card__text_content}>{currentData?.year}</div>
        <div className={css.card__text_content}>{currentData?.name}</div>
      </div>
      <FullPictureModal
        isVisible={isShowModal}
        currentData={currentData}
        setIsShowModal={setIsShowModal}
      />
    </>
  );
}
