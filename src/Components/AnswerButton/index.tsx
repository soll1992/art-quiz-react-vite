import { ReactNode } from 'react';
import css from './styles.module.scss';

type TButtonProps = {
    children: ReactNode,
    onClick: () => void,
}

export default function AnswerButton({ children, onClick }: TButtonProps) {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      {children}
    </button>
  );
}
