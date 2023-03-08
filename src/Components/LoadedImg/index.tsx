import cn from 'classnames';
import css from './styles.module.scss';
import useImageOnLoad from './model/useImageOnLoad';

interface IProps {
  src: string,
  alt: string,
  greyColor?: boolean,
  medium?: boolean,
  big?: boolean,
}

function LoadedImg({
  alt,
  src,
  greyColor,
  medium,
  big,
}: IProps) {
  const { isLoaded, imageRef } = useImageOnLoad();

  return (
    <img
      className={cn(css.card__body_img, {
        _grey: greyColor,
        _loaded: isLoaded,
        _medium: medium,
        _big: big,
      })}
      ref={imageRef}
      src={src}
      alt={alt}
    />
  );
}

export default LoadedImg;
