/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef } from 'react';
import { assetsFullSizePicPath } from '../../consts';
import { TDataItem } from '../../types';
import { closeModal, modalLayoutClickHandler } from '../TodayPictureCard/model';
import css from './styles.module.scss';

interface IProps {
  isVisible: boolean;
  currentData: TDataItem;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FullPictureModal({
  isVisible,
  currentData,
  setIsShowModal,
}: IProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  return !isVisible ? null : (
    <div
      role="presentation"
      className={css.modal}
      onClick={(e) => modalLayoutClickHandler(e, modalRef, setIsShowModal, closeModal)}
    >
      <div className={css.modal__dialog} ref={modalRef}>
        <button
          type="button"
          className={css.modal__dialog__close}
          onClick={() => closeModal(setIsShowModal)}
        />
        <img
          className={css.modal__content_image}
          src={`${assetsFullSizePicPath}/${currentData?.imageNum}full.webp`}
          alt={currentData?.name}
        />
      </div>
    </div>
  );
}
