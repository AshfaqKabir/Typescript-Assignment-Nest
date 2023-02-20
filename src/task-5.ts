export const duckLewisCalc = (
  totalScore: number,
  r1: number,
  r2: number,
  standard: boolean,
  g50: number = 0
): number => {
  let finalTotal: number = 0;
  if (r1 === r2) finalTotal = totalScore + 1;
  else if (r1 > r2) finalTotal = Math.floor(totalScore * (r2 / r1)) + 1;
  else if (r2 > r1 && standard)
    finalTotal = Math.floor(totalScore + (r2 - r1) * (g50 / 100)) + 1;
  else if (r2 > r1 && standard == false) {
    finalTotal = totalScore * (r2 / r1) + 1;
  }

  return finalTotal;
};
