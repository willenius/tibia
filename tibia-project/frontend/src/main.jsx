import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/homepage.css';
import App from './App.jsx';
import './styles/global.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
