import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>props.setVehiclePanel(false)} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
        <div onClick={()=>{props.setConfirmRidePanel(true);}} className='mb-2 w-full p-3 flex items-center justify-between border-gray-200 active:border-black border-2 rounded-lg '>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>Car <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-base'>2 mins away</h5>
              <p className='font-normal text-sm'>Affordable,compact rides</p>
            </div>
            <h2 className='text-lg font-medium'>$190.20</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true);}} className='mb-2 w-full p-3 flex items-center justify-between border-gray-200  active:border-black border-2 rounded-lg '>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Auto <span><i className="ri-user-fill"></i>5</span></h4>
              <h5 className='font-medium text-base'>2 mins away</h5>
              <p className='font-normal text-sm'>Affordable auto rides</p>
            </div>
            <h2 className='text-lg font-medium'>$100</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true);}} className='mb-2 w-full p-3 flex items-center justify-between border-gray-200  active:border-black border-2 rounded-lg '>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-fill"></i>2</span></h4>
              <h5 className='font-medium text-base'>2 mins away</h5>
              <p className='font-normal text-sm'>Affordable Motorcycle rides</p>
            </div>
            <h2 className='text-lg font-medium'>$70.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel