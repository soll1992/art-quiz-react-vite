export default function getLocalStorageVal(valName: string) {
  const getData = localStorage.getItem(valName);
  if (getData) {
    return JSON.parse(getData);
  }
  return {
    value: null,
    mute: null,
    isTimer: null,
    timeToAnswer: null,
  };
}
