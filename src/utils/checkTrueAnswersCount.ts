export default function getAnswersArr(
  scoreObj: Record<string, Record<string, boolean[]>> | null,
  quiz: string | undefined,
  category: string | undefined,
) {
  if (
    scoreObj
    && quiz
    && category
    && scoreObj[quiz]
    && scoreObj[quiz][category]
  ) {
    return scoreObj[quiz][category];
  }
  return null;
}
