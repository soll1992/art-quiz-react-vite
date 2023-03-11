import { memo } from 'react';
import { assetsSvgPath } from 'consts';
import css from './styles.module.scss';

interface IProps {
    onClickMuteHandler: () => void,
    muteValue: boolean,
}

function MuteButton({
  muteValue, onClickMuteHandler,
}: IProps) {
  return (
    <button
      type="button"
      className={css.mute}
      onClick={onClickMuteHandler}
    >
      <img
        src={`${assetsSvgPath}/${muteValue ? 'mute' : 'volume'}.svg`}
        alt="mute button"
      />
    </button>
  );
}

export default memo(MuteButton);
