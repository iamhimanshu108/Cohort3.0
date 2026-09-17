
import './App.css'
import router from './app.routes'
import { RouterProvider } from 'react-router'
import { AuthProvider } from '../modules/auth/context/useAuthContext'


function App() {
  

  return (
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
