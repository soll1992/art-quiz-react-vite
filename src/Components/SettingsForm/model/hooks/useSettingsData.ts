import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import debounce from '../../../../utils/debounce';
import getLocalStorageVal from '../../../../utils/getLocalStorageVal';
import { TFormik, TSettings } from '../../../../types';
import { onChangeHandler, onClickBooleanHandler, onClickTimeAnswerHandler } from '../index';
import { DEFAULT_SETTINGS } from '../../../../consts';

export default function useSettingsData() {
  const { VOLUME, TIME_TO_ANSWER, IS_TIMER } = DEFAULT_SETTINGS;

  const {
    volume, mute, isTimer, timeToAnswer,
  }: TSettings = getLocalStorageVal('quiz_settings');

  const formik = useFormik<TFormik>({
    initialValues: {
      volume: volume || VOLUME,
      mute: !!mute,
      isTimer: isTimer === null ? IS_TIMER : isTimer,
      timeToAnswer: timeToAnswer || TIME_TO_ANSWER,
    },
    onSubmit: (values) => {
      const valuesString = JSON.stringify(values);
      localStorage.setItem('quiz_settings', valuesString);
    },
  });

  const debounceSubmit = useCallback(
    debounce<(
      e?: React.FormEvent<HTMLFormElement> | undefined) => void>(
      formik.handleSubmit,
      500,
      ),
    [],
  );

  const onClickMuteHandler = useCallback(
    () => onClickBooleanHandler('mute', formik.values.mute, formik.setFieldValue, debounceSubmit),
    [formik.values.mute],
  );

  const timerClickHandler = useCallback(
    () => onClickBooleanHandler('isTimer', formik.values.isTimer, formik.setFieldValue, debounceSubmit),
    [formik.values.isTimer],
  );

  const onChangeVolumeHandler = useCallback(
    (val: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(
      val,
      formik.handleChange,
      debounceSubmit,
    ),
    [formik.values.volume],
  );

  const timeForAnswerHandler = useCallback(
    (buttonVal: string) => onClickTimeAnswerHandler(buttonVal, formik, debounceSubmit),
    [formik.values.timeToAnswer],
  );

  return {
    formik,
    onClickMuteHandler,
    timerClickHandler,
    onChangeVolumeHandler,
    timeForAnswerHandler,
  };
}
