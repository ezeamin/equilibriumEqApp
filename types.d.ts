import type { Accessor } from 'solid-js';

interface InitialValues {
  a1: string;
  b1: string;
  a2: string;
  b2: string;
}

interface ResultValues {
  x: number | null;
  y: number | null;
}

interface EquationProps {
  values: Accessor<InitialValues>;
  handleChange: (e: Event) => void;
  type: '1' | '2';
  sx?: object;
}

interface ResultProps {
  values: ResultValues;
}
