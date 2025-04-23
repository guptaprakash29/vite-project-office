import { StrictMode } from 'react'  //Core Foundational Library
import { createRoot } from 'react-dom/client' //implementation

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
