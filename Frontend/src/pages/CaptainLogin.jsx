import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [captainData, setCaptainData] = useState({})

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault();
    const captain = {
      email: email,
     password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if(response.status == 201)
    {
      const data = response.data;
      setCaptainData(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-[92vh] flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
      <h3 className='text-base font-medium mb-2'>What's your Email</h3>
      <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
        type="email" 
        value={email}
        onChange={(e) =>{
          setEmail(e.target.value);
          
        }}
        required 
        placeholder='email.example.com'
      />
      <h3 className='text-base font-medium mb-2'>Enter Password</h3>
      <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
        type="password" 
        value={password}
        onChange={(e) =>{
          setPassword(e.target.value);
          
        }}
        required
        placeholder='password' />
      <button
        className='bg-[#111] font-semibold text-[#fff] mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base'

      >Login</button>
      <p className='text-center'>Join a fleet?&nbsp;<Link to='/captain-signup' className='text-blue-500 text-sm'>Register as a Captain</Link>
      </p>
      </form>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center mb-5 font-semibold text-[#fff] rounded px-4 py-2 w-full text-base placeholder:text-base'
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin