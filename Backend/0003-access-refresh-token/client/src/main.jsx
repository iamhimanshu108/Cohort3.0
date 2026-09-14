import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App.jsx'
import { UserProvider } from './modules/auth/context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
