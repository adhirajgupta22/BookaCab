import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
        props.setConfirmRidePanel(false);
      }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-3'>Confirm Your Ride</h3>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
        <div className='w-full'>
          <div className='flex items-center gap-2 mb-2 p-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-xl font-medium' >562/11-A</h3>
              <p className='-mt-1 text-lg text-gray-600'>Jhumri talaiyaa,Kanpur</p>
            </div>
          </div>
          <div className='flex items-center gap-2 mb-2 p-2'>
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className='text-xl font-medium' >562/11-A</h3>
              <p className='-mt-1 text-lg text-gray-600'>Jhumri talaiyaa,Kanpur</p>
            </div>
          </div>
          <div className='flex items-center gap-2 mb-2 p-2'>
            <i className="text-lg ri-currency-fill"></i>
            <div>
              <h3 className='text-xl font-medium'>$193.20</h3>
              <p className='-mt-1 text-lg text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
          props.setConfirmRidePanel(false);
          props.setVehiclePanel(false);
          props.setLookingForDriverPanel(true);
        }} className='w-full bg-green-600 text-white text-lg font-semibold p-2 rounded-lg'>Confirm</button>
      </div>

    </div>
  )
}

export default ConfirmRide