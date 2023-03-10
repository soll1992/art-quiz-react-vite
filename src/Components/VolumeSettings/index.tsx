import React, { memo } from 'react';
import useSound from 'use-sound';
import { assetsSoundPath, VOLUME_VALUES } from 'consts';
import css from './styles.module.scss';

interface IProps {
    onChangeVolumeHandler: (val: React.ChangeEvent<HTMLInputElement>) => void,
    volumeValue: number,
    muteValue: boolean,
}

function VolumeSettings({
  volumeValue, muteValue, onChangeVolumeHandler,
}: IProps) {
  const { MIN_VOLUME, MAX_VOLUME } = VOLUME_VALUES;
  const [play] = useSound(`${assetsSoundPath}/true.mp3`, { volume: volumeValue / MAX_VOLUME });

  return (
    <div className={css.volume_slider}>
      <input
        className={css.volume_slider_input}
        name="volume"
        type="range"
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        onChange={(val) => onChangeVolumeHandler(val)}
        onMouseUp={() => { if (!muteValue) play(); }}
        value={volumeValue}
      />
    </div>

  );
}

export default memo(VolumeSettings);
