import React from 'react';
import './styles/App.css';
import AppRouter from './routes/AppRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#FDCE4D',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <AppRouter />
      </main>
      </ThemeProvider>
  );
}

export default App;
