import React from 'react'

const LocationSearchPanel = (props) => { 

    //sample array for location
    const locations = [
        "Rawatapur,kanpur,Uttar Pradesh",
        "Hall 2 IIT Kanpur,208016, Uttar Pradesh",
        "Hall 12 IIT Kanpur,208016, Uttar Pradesh",
        "Hall 3 IIT Kanpur,208016, Uttar Pradesh",
        "Hall 5 IIT Kanpur,208016, Uttar Pradesh"
    ]

  return (
    <div>
        {/* this is just a sample data for frontend */}

        {
            locations.map(function(elem,idx){
                return (
                    <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }} 
                         className='border-2 rounded-xl border-gray-200 active:border-black p-3 gap-4 my-2 flex items-center justify-start '>
                        <h2 className='bg-[#eee] flex items-center justify-center h-10 w-8 rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
                        <h4 className='text-lg font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LocationSearchPanel