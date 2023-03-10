/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { assetsQuizPath } from 'consts';
import { TDataItem } from 'types';
import FullPictureModal from '../FullPictureModal';
import LoadedImg from '../LoadedImg';
import css from './styles.module.scss';

interface IProps {
  data: TDataItem;
  isTrueAnswer: boolean;
}

export default function ScoreItem({
  data,
  isTrueAnswer,
}: IProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <main
        className={css.item__body}
        onMouseOver={() => setShowInfo(true)}
        onMouseOut={() => setShowInfo(false)}
        onClick={() => setIsShowModal((prev) => !prev)}
        role="presentation"
      >
        <LoadedImg
          greyColor={!isTrueAnswer}
          src={`${assetsQuizPath}/${
            data.imageNum
          }.webp`}
          alt={data.name}
          medium
        />
        {(showInfo) && (
        <div className={css.item__body_info}>
          <h4 className={css.item__body_info_container}>{data.author}</h4>
          <div className={css.item__body_info_container}>{data.name}</div>
        </div>
        )}
      </main>
      <FullPictureModal
        isVisible={isShowModal}
        currentData={data}
        setIsShowModal={setIsShowModal}
      />
    </>
  );
}
