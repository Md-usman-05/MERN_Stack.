import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Forms from './Forms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms />
  </StrictMode>,
)
