import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1597850265049-a8d4df7993f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODI5fHx0cmFmZmljJTIwbGlnaHRzfGVufDB8fDB8fHww)] h-[92vh] pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='text-xl pb-7 py-4 px-4 font-bold bg-white'>
            <h2 className='text-xl font-bold'>
                Get Started with Uber.
            </h2>
            <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 mt-5 rounded-lg'>Continue</Link>

        </div>
    </div>
  )
}

export default Home