import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';


const UserSignup = () => {

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    }    

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    if(response.status == 201)
    {
      const data = response.data;

      setUserData(data.user)
      
      navigate('/home')

    }
    
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }


  return (
    <div className='py-7 px-7 h-[92vh] flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>

        <h3 className='text-base font-medium mb-2'>What's your name</h3>
        <div className='flex gap-5 mb-6'>
          <input 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            type="text" 
            value={firstname}
            onChange={(e) =>{
              setFirstname(e.target.value);
            }}
            required
            placeholder='First name' />
          <input 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            type="text" 
            value={lastname}
            onChange={(e) =>{
              setLastname(e.target.value);  
            }}
            required
            placeholder='Last name' />
        </div>



      <h3 className='text-base font-medium mb-2'>What's your Email</h3>
      <input 
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
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
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
        type="password" 
        value={password}
        onChange={(e) =>{
          setPassword(e.target.value);
        }}
        required
        placeholder='password' />
      <button
        className='bg-[#111] font-semibold text-[#fff] mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base'

      >Create Account</button>
      <p className='text-center text-sm'>Already have an account?&nbsp;<Link to='/login' className='text-blue-500'>Login here</Link>
      </p>
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Goole Privacy Policy</span> and <span className='underline'>Terms of Service</span> </p>
      </div>
    </div>
  )
}

export default UserSignup