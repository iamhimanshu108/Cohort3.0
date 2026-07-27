const Login = ({ onSwitch }) => {
  return (
      <div className='bg-white w-full max-w-sm p-6 rounded-xl flex flex-col shadow-lg'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form className='flex flex-col gap-4 mt-5' onSubmit={(event) => event.preventDefault()}>
          <input className='p-2 border border-gray-400 rounded' type='email' placeholder='Email' required />
          <input className='p-2 border border-gray-400 rounded' type='password' placeholder='Password' required />
          <button className='p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700'>Login</button>
        </form>
        <p className='mt-5 text-sm'>
          Don&apos;t have an account?{' '}
          <button type='button' onClick={onSwitch} className='text-blue-600 cursor-pointer hover:underline'>
            Register here
          </button>
        </p>
      </div>
  )
}

export default Login
