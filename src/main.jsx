import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme,ThemeProvider } from '@mui/material';
import App from './App.jsx'

const theme = createTheme({})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
