import { Show } from 'solid-js';
import { Box, Typography } from '@suid/material';

import { ResultProps } from '../../types';

const Result = (props: ResultProps) => {
  return (
    <Show when={props.values.x !== null && props.values.y !== null}>
      <Box sx={{ borderRadius: '1rem', mt: 3, backgroundColor: '#abc', p: 2 }}>
        <Typography variant='h6' component='h3'>
          Resultado de interseccion:
        </Typography>
        <Typography variant='h6' component='h3'>
          x = <strong>{props.values.x?.toFixed(2)}</strong>
        </Typography>
        <Typography variant='h6' component='h3'>
          y = <strong>{props.values.y?.toFixed(2)}</strong>
        </Typography>
      </Box>
    </Show>
  );
};

export default Result;
