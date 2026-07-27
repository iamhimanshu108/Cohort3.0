import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='min-h-screen bg-gray-300 flex justify-center items-center p-4'>
      {isLogin ? (
        <Login onSwitch={() => setIsLogin(false)} />
      ) : (
        <Register onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  )
}

export default App
