import css from './styles.module.scss';

type TButtonProps = {
    text: string,
    onClick: () => void,
}

export default function Button({ text, onClick }: TButtonProps) {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      {text}
    </button>
  );
}
