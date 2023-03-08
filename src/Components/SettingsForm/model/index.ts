import React from 'react';
import { FormikProps } from 'formik';
import { TFormik } from '../../../types';
import { TIME_ANSWER_SETTINGS } from '../../../consts';

export function onChangeHandler(
  val: React.ChangeEvent<HTMLInputElement>,
  handleChange: FormikProps<TFormik>['handleChange'],
  submitHandler: (...args: unknown[]) => void,
) {
  handleChange(val);
  submitHandler();
}

export function onClickBooleanHandler(
  fieldName: string,
  val: boolean,
  setFieldHandler: FormikProps<TFormik>['setFieldValue'],
  submitHandler: (...args: unknown[]) => void,
) {
  setFieldHandler(fieldName, !val);
  submitHandler();
}

export function onClickTimeAnswerHandler(
  buttonVal: string,
  formikProps: FormikProps<TFormik>,
  submitHandler: (...args: unknown[]) => void,
) {
  const { MIN_TIME_TO_ANSWER, MAX_TIME_TO_ANSWER, TIME_STEP } = TIME_ANSWER_SETTINGS;

  if (
    (formikProps.values.timeToAnswer > MIN_TIME_TO_ANSWER
        && buttonVal === 'minus')
      || (formikProps.values.timeToAnswer < MAX_TIME_TO_ANSWER
        && buttonVal === 'plus')
  ) {
    formikProps.setFieldValue(
      'timeToAnswer',
      buttonVal === 'plus'
        ? formikProps.values.timeToAnswer + TIME_STEP
        : formikProps.values.timeToAnswer - TIME_STEP,
    );
    submitHandler();
  }
}
