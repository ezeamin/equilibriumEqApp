import { Stack, Typography } from '@suid/material';

import { Input } from '../styled';

import { EquationProps } from '../../types';

const Equation = (props: EquationProps) => {
  const { values, handleChange, type, sx } = props;

  const aValue = type === '1' ? 'a1' : 'a2';
  const bValue = type === '1' ? 'b1' : 'b2';

  return (
    <Stack
      direction='row'
      alignItems='flex-end'
      sx={{
        borderRadius: '1rem',
        backgroundColor: '#abc',
        p: 2,
        mx: 2,
        ...sx,
      }}
    >
      <Typography variant='body1' component='p'>
        y =
      </Typography>
      <Input
        value={values()[aValue]}
        onChange={handleChange}
        name={aValue}
        type='number'
      />
      <Typography variant='body1' component='p'>
        x +
      </Typography>
      <Input
        value={values()[bValue]}
        onChange={handleChange}
        name={bValue}
        type='number'
      />
    </Stack>
  );
};

export default Equation;
