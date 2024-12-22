import React,{useState} from 'react'

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/zoeDIJsJY3EHhRxIkVaUQOk4XPLJQ2SVubiyrENL3pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI3LzQ5Lzc3/LzM2MF9GXzI3NDk3/NzM2X0kyMVpodHd4/RnJ3SWxOQjcwSWdr/ckh1eVZQMlhoa1hw/LmpwZw" alt="" />

      <div className='h-screen w-screen '>
          {/* image for temporray use */}
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[25%] p-5 bg-white'>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e); 
          }}>
            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e)=>{
                //console.log(e.target.value);
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mb-3 border-neutral-900 mt-4' 
              type="text" 
              placeholder='Add a pickup location' />
            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value = {destination}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full' 
              type="text" 
              placeholder='Enter Your Destination' /> 
          </form>
        </div>
        <div className='h-[75%] bg-red-500 p-5 hidden'>

        </div>
      </div>
            
    </div>
  )
}

export default Home