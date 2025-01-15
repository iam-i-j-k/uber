import React from 'react'

const WaitingForDriver = (props) => {

  return (
    <div>
        <h5 onClick={()=>{
          props.setWaitingForDriver(false);
        }} className='p-1 w-[93%] text-center absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold'>Waiting For Driver</h3>
        <div className='flex items-center justify-between'>
            <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
            <div className='text-right'>
                <h2 className='text-lg'>Sarthak</h2>
                <h4 className='text-xl font-semibold -mt-1'>MP04 AB 1234</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
        </div>

        <div className='flex justify-between items-center flex-col'>
            <div>
                <div className='flex items-center justify-between gap-5 p-3 border-b-2'>
                    
                    
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
        </div>     
    </div>
  )
}

export default WaitingForDriver