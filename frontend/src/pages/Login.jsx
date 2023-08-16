import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='bg-white w-fit p-8 m-auto mt-200px rounded-lg shadow-2xl'>
        <div className="Login flex flex-col items-center justify-center gap-4">
          <span className='audinary text-3xl'><Link to="/">audinary</Link></span>
          <h1>Log In</h1>
          <form action="" className='flex flex-col justify-center items-center p-4 gap-6'>
            <input type="text" required placeholder='username' name='username' className='p-3 border-2 border-secondary rounded-md' onChange={handleChange} />
            <input type="password" required placeholder='password' name='password' className='p-3 border-2 border-secondary rounded-md' onChange={handleChange} />
            <button onClick={handleSubmit} className='bg-primary text-white p-2 rounded-md hover:bg-buttonhover'>Login</button>
            <p className='text-red-500'>There is an error!</p>
            <span>Don't have an account? <Link to="/register" className='underline text-primary hover:text-buttonhover'>Sign Up</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login