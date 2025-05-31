import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
            props.setConfirmRidePopUpPanel(false);
        }} className='p-1 w-[93%] text-center absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold'>Confirm This Ride To Start</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SieSDnaZtBEq5mYqs-QZEOMuiED6aC6X0Q&s" alt="" />
                <h2>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-medium'>2.2KM</h5>
        </div>
        <div className='flex justify-between items-center flex-col'>
            <div className='w-full '>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>563/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Near Kapoor's Cafe</h3>
                        <p className='text-sm -mt-1 text-gray-600'>24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="text-lg ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>   

            <Link to='/captain-riding' onClick={()=>{
            }} className='w-full flex justify-center mt-5 p-3 rounded-lg bg-green-600 text-white font-semibold'>Confirm</Link>
            
            <button onClick={()=>{
                props.setConfirmRidePopUpPanel(false)
                props.setRidePopUpPanel(false)
            }} className='w-full mt-5 p-3 rounded-lg bg-red-600 text-white font-semibold'>Cancel</button>
        </div>  
    </div>
  )
}

export default ConfirmRidePopUp