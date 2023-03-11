import { TDataArr } from 'types';

export default function pathValidation(data: TDataArr | null, path: string | undefined, dataOnLoad: boolean, mode: 'category' | 'quiz') {
  if (path && !dataOnLoad) {
    const emptyData = data?.length === 0;
    if (!emptyData && mode === 'quiz') {
      const wrongPath = ![...new Set(data?.map((item) => item.quiz))].includes(path);
      return wrongPath;
    }
    if (emptyData && mode === 'category') {
      return true;
    }
    return false;
  }
  return false;
}
