import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setVehiclePanel(false);
        }} className='p-1 w-[93%] text-center absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setVehiclePanel(false)
            props.setConfirmRidePanel(true)
        }}  className='flex p-3 mb-2 justify-between items-center border-4 active:border-black bg-gray-100 rounded-2xl'>
          <img className='h-20' src="https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Uber Go <span ><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-[1.3rem] font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>{
            props.setVehiclePanel(false)
            props.setConfirmRidePanel(true)
        }}  className='flex p-3 mb-2 justify-between items-center border-4 active:border-black bg-gray-100 rounded-2xl'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Moto<span ><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-[1.3rem] font-semibold antialiased'>₹65.53</h2>
        </div>
        <div onClick={()=>{
            props.setVehiclePanel(false)
            props.setConfirmRidePanel(true)
        }}  className='flex p-3 mb-2 justify-between items-center border-4 active:border-black bg-gray-100 rounded-2xl'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Auto<span ><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>4 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable Auto rides</p>
          </div>
          <h2 className='text-[1.3rem] font-semibold'>₹118.53</h2>
        </div>
    </div>
  )
}

export default VehiclePanel