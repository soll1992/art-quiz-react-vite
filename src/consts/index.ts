export const assetsQuizPath = '/assets/quiz';
export const assetsSoundPath = '/assets/sound';
export const assetsFullSizePicPath = '/assets/full';
export const assetsSvgPath = '/assets/svg';

export const API_URL = '/data/data.json';

export enum AppRoutes {
    Root = '/',
    Quiz = '/:quiz',
    Category = '/:category',
    Today = '/today',
    Score = '/score',
    Settings = '/settings',
  }

export enum QuizPathes {
    Artist = '/artist',
    Pictures = '/pictures'
  }

export const QUESTION_CATEGORI_COUNT = 10;

export const TIME_ANSWER_SETTINGS = {
  MIN_TIME_TO_ANSWER: 5,
  MAX_TIME_TO_ANSWER: 30,
  TIME_STEP: 5,
};

export const VOLUME_VALUES = {
  MIN_VOLUME: 0,
  MAX_VOLUME: 100,
};

export const DEFAULT_SETTINGS = {
  VOLUME: 50,
  TIME_TO_ANSWER: 20,
  IS_TIMER: true,
};
