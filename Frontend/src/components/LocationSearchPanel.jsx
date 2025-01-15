import React from 'react'

const LocationSearchPanel = (props) => {
  

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Singhania's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ]

  return (
    <div>
      {locations.map((item,idx)=>{
        return <div key={idx}
         onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)

        }} className='flex gap-4 items-center border-2 p-3 border-gray-50 active:border-black my-2 justify-start rounded-xl'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className='font-medium'>{item}</h4> 
    </div>
      })}
      
    </div>
  )
}

export default LocationSearchPanel