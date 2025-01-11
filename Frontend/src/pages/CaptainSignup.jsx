import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')  
    
  const [captainData, setCaptainData] = useState({})
  

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newCaptain = {
        fullname: {
          firstname: firstname,
          lastname: lastname,
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        }
      };
      
      

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);
    
      if(response.status == 201)
      {
        const data = response.data;
  
        setCaptainData(data.newCaptain)
        localStorage.setItem('token', data.token)
        
        navigate('/captain-home')
  
      }
  
      // Clear form fields
      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
  
    } catch (error) {
      console.error('Registration error:', error);
      console.error('Error response:', error.response?.data);
      // Handle error appropriately (show message to user, etc.)
    }
  };




  return (
    <div className='py-7 px-7 h-[93vh] flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>

        <h3 className='text-base font-medium mb-2'>What's our Captain's name</h3>
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



      <h3 className='text-base font-medium mb-2'>What's our Captain's Email</h3>
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

      <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
      <div className='flex gap-5 mb-6'>
        <input 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
          type="text" 
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          required
          placeholder='Vehicle Color' 
        />
        <input 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
          type="text" 
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          required
          placeholder='Vehicle Plate Number' 
        />
      </div>
      <div className='flex gap-5 mb-6'>
        <input 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
          type="number" 
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          required
          min="1"
          max="8"
          placeholder='Vehicle Capacity' 
        />
        <select
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base'
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">car</option>
          <option value="motorcycle">Moto</option>
          <option value="auto">auto</option>
        </select>
      </div>

      <button
        className='bg-[#111] font-semibold text-[#fff] mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base'

      >Create Captain Account</button>
      <p className='text-center text-sm'>Already have an account?&nbsp;<Link to='/captain-login' className='text-blue-500'>Login here</Link>
      </p>
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Goole Privacy Policy</span> and <span className='underline'>Terms of Service</span> </p>
      </div>
    </div>
  )
}

export default CaptainSignup