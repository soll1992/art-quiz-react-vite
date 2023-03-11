import { TDataArr } from 'types';

export default function pathValidation(data: TDataArr, path: string | undefined, dataOnLoad: boolean, mode: 'category' | 'quiz') {
  if (path && data && !dataOnLoad) {
    const emptyData = data.length === 0;
    const wrongPath = ![...new Set(data.map((item) => (mode === 'category' ? item.category : item.quiz)))].includes(path);
    return emptyData || wrongPath;
  }
  return false;
}
