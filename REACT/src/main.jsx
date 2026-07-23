import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JSX from './DB_connect.jsx'
import '../../CSS/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX />
  </StrictMode>,
)
