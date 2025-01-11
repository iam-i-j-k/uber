import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })

    }
      else{
        gsap.to(panelRef.current, {
          height: '0%',
          padding: 0,
          opacity: 0
        })
        gsap.to(panelCloseRef.current,{
          opacity: 0
        })
      }
    
  
    
  }, [panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='w-screen h-screen '>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
        <div className='relative h-[30%] p-6 bg-white'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 top-6 right-10 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e);
          }}>
            <div className="line absolute bottom-10 left-10 h-16 w-1 bg-gray-800"></div>
            <input
            onClick={()=>{
              setPanelOpen(true);
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value);
            }}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
            type="text" 
            placeholder='Add a pick-up location' />
            <input
            onClick={()=>{
              setPanelOpen(true);
            }} 
            value={destination}
            onChange={(e)=>{
              setPickup(e.target.value);
            }}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
            type="text" 
            placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='opacity-0 bg-white'>
            <LocationSearchPanel />
        </div>
      </div>
      <div className='fixed w-full z-10 bottom-0 bg-white p-3'>
        <div className='flex p-3justify-between items-center border-4 border-black rounded-2xl'>
          <img className='h-20' src="https://www.uber-assets.com/image/upload/v1699622871/assets/50/b5e341-5426-42fd-acfe-037d63333de5/original/UberBlackXL.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Uber Go <span ><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-[1.3rem] font-semibold'>₹193.20</h2>
        </div>
      </div>
    </div>
  )
}

export default Home