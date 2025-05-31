import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div className='p-5'>
        <h5 onClick={()=>{
          props.setVehiclePanel(false);
        }} className='p-1 w-[93%] text-center absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold'>Confirm your Ride</h3>
        <div className='flex justify-between items-center flex-col'>
            <img className='h-48' src="https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png" alt="" />
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

            <button onClick={()=>{
                props.setVehiclePanel(false)
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
            }} className='w-full mt-5 p-2 rounded-lg bg-green-600 text-white font-semibold'>Confirm</button>    
        </div>     
    </div>
  )
}

export default ConfirmRide