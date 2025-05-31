import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 rounded-full flex bg-white items-center justify-center'>
            <i className='text-lg font-medium ri-home-5-line'></i>
        </Link>
        <div className='h-1/2'>
            <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/2 p-4'>

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
                    <div className='flex items-center gap-5 p-3  border-b-2'>
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
            <button className='w-full mt-5 p-2 rounded-lg bg-green-600 text-white font-semibold'>Make Payment</button>
        </div>
    </div>
  )
}

export default Riding