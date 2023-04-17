import { Component, createSignal } from 'solid-js';

import { Button, Container, Divider, Stack, Typography } from '@suid/material';

import Equation from './components/Equation';
import Result from './components/Result';

import { solveEquation } from './helpers/solveEquation';

import { InitialValues, ResultValues } from '../types';

const initialValues = {
  a1: '',
  b1: '',
  a2: '',
  b2: '',
};

const initialResultValues = {
  x: null,
  y: null,
};

const App: Component = () => {
  const [values, setValues] = createSignal<InitialValues>(initialValues);
  const [resultValues, setResultValues] =
    createSignal<ResultValues>(initialResultValues);

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;

    const { name, value } = target;

    setValues({ ...values(), [name]: value });
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    // check if values are valid (they must be numbers)
    // if they are valid, then call the function to solve the equation
    // if they are not valid, then show an error message

    const [a1, b1, a2, b2] = [
      values().a1,
      values().b1,
      values().a2,
      values().b2,
    ];

    if (!(a1 && b1 && a2 && b2)) {
      return alert('Por favor, ingrese todos los valores');
    }

    const result = solveEquation(
      Number(a1),
      Number(b1),
      Number(a2),
      Number(b2)
    );

    if (result) {
      setResultValues(result);
    }
  };

  return (
    <Container component='main'>
      <Typography variant='h5' component='h1'>
        Equilibrio: Ley de oferta y demanda
      </Typography>
      <Typography variant='h6' component='h2'>
        Ingrese los valores de la curva de oferta y demanda para poder
        determinar el equilibrio:
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <form onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          // @ts-expect-error
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          gap={1}
        >
          <Typography variant='body1' component='p'>
            Curva <strong>oferta</strong>:
          </Typography>
          <Equation type='1' values={values} handleChange={handleChange} />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          // @ts-expect-error
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          gap={1}
          sx={{ mt: 2 }}
        >
          <Typography variant='body1' component='p'>
            Curva <strong>demanda</strong>:
          </Typography>
          <Equation type='2' values={values} handleChange={handleChange} />
        </Stack>
        <Stack alignItems='flex-end'>
          <Button type='submit'>Resolver</Button>
        </Stack>
      </form>
      <Result values={resultValues()} />
    </Container>
  );
};

export default App;
