import React from 'react';
import { TDataArr } from 'types';

export function closeModal(
  isShowSetter: (value: React.SetStateAction<boolean>) => void,
) {
  isShowSetter(false);
}

export function modalLayoutClickHandler(
  e: React.MouseEvent,
  ref: React.RefObject<HTMLDivElement>,
  isShowSetterFunc: (value: React.SetStateAction<boolean>) => void,
  closeHandler: (
    isShowSetter: (value: React.SetStateAction<boolean>) => void,
  ) => void,
) {
  const { target } = e;
  if (ref.current) {
    if (!ref.current.contains(target as Node)) {
      closeHandler(isShowSetterFunc);
    }
  }
}

export function dayOfYear(date: Date) {
  return Math.floor(
    (+date - +new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24),
  );
}

export function getTodayPictureNumber(
  arr: TDataArr,
  getDayCallback: (date: Date) => number,
) {
  const today = new Date();
  const currentDay = getDayCallback(today);
  const pictureCount = arr.length;
  if (currentDay >= pictureCount) {
    return currentDay - pictureCount;
  }
  return currentDay;
}
