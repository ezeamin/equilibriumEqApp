import { ResultValues } from '../../types';

export const solveEquation = (
  a1: number,
  b1: number,
  a2: number,
  b2: number
): ResultValues => {
  const x = (b2 - b1) / (a1 - a2);
  const y = a1 * x + b1;

  return { x, y };
};
