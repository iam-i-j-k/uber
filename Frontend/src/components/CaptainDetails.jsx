import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SieSDnaZtBEq5mYqs-QZEOMuiED6aC6X0Q&s" alt="" />
              <h4>Harsh Patel</h4>
            </div>
            <div className='flex items-center flex-col justify-center'>
              <h5 className='text-xl font-semibold'>₹295.81</h5>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex p-5 mt-5 bg-gray-100 rounded-3xl gap-5 justify-center items-start'>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails