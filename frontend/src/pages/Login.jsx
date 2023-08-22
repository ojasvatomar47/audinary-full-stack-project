import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleChange = (event) => {
    setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch(err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='bg-gradient-to-br from-white to-secondary border-primary border-4 w-fit px-3 py-8 md:p-8 m-auto mt-200px rounded-lg shadow-2xl'>
        <div className="Login flex flex-col items-center justify-center gap-4">
          <span className='audinary text-3xl'><Link to="/">audinary</Link></span>
          <h1>Log In</h1>
          <form action="" className='flex flex-col justify-center items-center p-2 md:p-4 gap-5 md:gap-6'>
            <input type="text" required placeholder='Name' name='username' className='p-2 text-black md:p-3 border-2 border-secondary rounded-md' onChange={handleChange} />
            <input type="password" required placeholder='Password' name='password' className='p-2 text-black md:p-3 border-2 border-secondary rounded-md' onChange={handleChange} />
            <button onClick={handleSubmit} className='bg-primary text-white p-2 rounded-md hover:bg-buttonhover'>Login</button>
            {error && <p className='text-red-500'>{error}</p>}
            <span>Don't have an account? <Link to="/register" className='underline text-primary hover:text-buttonhover'>Sign Up</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login