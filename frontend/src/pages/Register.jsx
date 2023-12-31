import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  };

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='bg-gradient-to-br from-white to-secondary border-primary border-4 w-fit px-3 py-8 md:p-8 m-auto mt-200px rounded-lg shadow-2xl'>
        <div className="Login flex flex-col items-center justify-center gap-4">
          <span className='audinary text-3xl'><Link to="/">audinary</Link></span>
          <h1>Sign Up</h1>
          <form action="" className='flex flex-col justify-center items-center p-2 md:p-4 gap-5 md:gap-6'>
            <input type="text" required placeholder='Name' name='username' className='p-2 md:p-3 text-black border-2 border-secondary rounded-md' onChange={handleChange} />
            <input type="email" required placeholder='E-mail' name='email' className='p-2 md:p-3 text-black border-2 border-secondary rounded-md' onChange={handleChange} />
            <input type="password" required placeholder='Password' name='password' className='p-2 md:p-3 text-black border-2 border-secondary rounded-md' onChange={handleChange} />
            <button onClick={handleSubmit} className='bg-primary text-white p-2 rounded-md hover:bg-buttonhover'>Register</button>
            {error && <p className='text-red-500'>{error}</p>}
            <span>Already have an account? <Link to="/login" className='underline text-primary hover:text-buttonhover'>Login</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register