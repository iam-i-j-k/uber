import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  
  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    
    if(response.status == 200){
      const data = response.data;
      setUserData(data.user);
      localStorage.setItem('token', JSON.stringify(data.token));
      
      navigate('/home')
    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className='pt-7 px-7 h-[92vh] flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
      <p className='text-center'>New here?&nbsp;<Link to='/signup' className='text-blue-500'>Create new Account</Link>
      </p>
      </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center mb-5 font-semibold text-[#fff] rounded px-4 py-2 w-full text-base placeholder:text-base'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin