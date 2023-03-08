export default function getScoreObject() {
  const storageData = localStorage.getItem('quiz_score');
  if (storageData) {
    const parseData: Record<string, Record<string, boolean[]>> = JSON.parse(
      storageData,
    );
    return parseData;
  }
  return null;
}
