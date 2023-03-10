import { TDataArr } from 'types';

export default function pathValidation(data: TDataArr, path: string | undefined, mode: 'category' | 'quiz') {
  return path && data.length && ![...new Set(data.map((item) => (mode === 'category' ? item.category : item.quiz)))].includes(path);
}
