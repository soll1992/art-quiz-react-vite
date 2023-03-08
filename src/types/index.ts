export type TDataItem = {
  author: string;
  name: string;
  year: string;
  imageNum: string;
  category: string;
  quiz: string;
};

export type TDataArr = TDataItem[];

export type TSettings = {
  volume: number | null;
  mute: boolean | null;
  isTimer: boolean | null;
  timeToAnswer: number | null;
};

export type TFormik = {
  volume: number;
  mute: boolean;
  isTimer: boolean;
  timeToAnswer: number;
};
