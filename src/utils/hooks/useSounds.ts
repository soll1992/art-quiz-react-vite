import useSound from 'use-sound';
import { assetsSoundPath, DEFAULT_SETTINGS, VOLUME_VALUES } from '../../consts';

export default function useSounds(volume: number | null) {
  const { MAX_VOLUME } = VOLUME_VALUES;
  const { VOLUME } = DEFAULT_SETTINGS;
  const [playTrue] = useSound(`${assetsSoundPath}/true.mp3`, {
    volume: (volume || VOLUME) / MAX_VOLUME,
  });
  const [playFalse] = useSound(`${assetsSoundPath}/false.mp3`, {
    volume: (volume || VOLUME) / MAX_VOLUME,
  });
  const [playResult] = useSound(`${assetsSoundPath}/result.mp3`, {
    volume: (volume || VOLUME) / MAX_VOLUME,
  });

  return {
    playTrue,
    playFalse,
    playResult,
  };
}
