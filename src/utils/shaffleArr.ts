import { TDataArr } from '../types';

export default function shuffleArr(array: TDataArr) {
  const arrCopy = [...array];
  for (let i = arrCopy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }
  return arrCopy;
}
