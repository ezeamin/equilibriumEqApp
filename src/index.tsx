/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { ThemeProvider, createTheme } from '@suid/material';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

render(
  () => (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  ),
  root!
);
