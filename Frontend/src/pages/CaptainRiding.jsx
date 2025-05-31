import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div className='h-screen'>
        <div className='fixed p-4 top-0 flex items-center justify-between'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/captain-home' className='fixed right-2 top-2 h-10 w-10 rounded-full flex bg-white items-center justify-center'>
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-4/5'>
            <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='flex relative items-center justify-between h-1/5 p-6 bg-yellow-400'>
            <h5 onClick={()=>{
                props.setRidePopUpPanel(false);
            }} className='p-1 w-[93%] text-center absolute top-0'><i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i></h5>
          <h4 className='text-xl font-semibold'>4 KM Away</h4>
          <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        </div>
        
    </div>
  )
}

export default CaptainRiding