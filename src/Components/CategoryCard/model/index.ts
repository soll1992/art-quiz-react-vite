import { TDataArr } from '../../../types';
import randomInteger from '../../../utils/randomInteger';

export default function getCurrentImg(data: TDataArr, title: string, quizType?: string) {
  return data.filter(
    (item) => quizType === item.quiz && item.category === title,
  )[randomInteger(0, 9)];
}
