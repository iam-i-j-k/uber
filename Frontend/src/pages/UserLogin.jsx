import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [userData, setUserData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    console.log(userData);
    
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-[92vh] flex flex-col justify-between'>
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