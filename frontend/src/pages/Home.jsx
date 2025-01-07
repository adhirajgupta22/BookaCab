import React,{useState} from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import { useRef } from 'react';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);  //to give reference to the panel animation 
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const LookingForDriverPanelRef = useRef(null);
  const WaitingForDriverPanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [LookingForDriverPanel, setLookingForDriverPanel] = useState(false);
  const [WaitingForDriverPanel, setWaitingForDriverPanel] = useState(false);



  const submitHandler = (e) => {
    e.preventDefault();
  }

  //gsap for scroll up animation for pickup container
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'75%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        translateY:0,
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)',
      })
    }

  },[vehiclePanel]);

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        translateY:0,
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)',
      })
    }

  },[confirmRidePanel]);

  useGSAP(function(){
    if(LookingForDriverPanel){
      gsap.to(LookingForDriverPanelRef.current,{
        translateY:0,
      })
    }else{
      gsap.to(LookingForDriverPanelRef.current,{
        transform:'translateY(100%)',
      })
    }

  },[LookingForDriverPanel]);

  useGSAP(function(){
    if(WaitingForDriverPanel){
      gsap.to(WaitingForDriverPanelRef.current,{
        translateY:0,
      })
    }else{
      gsap.to(WaitingForDriverPanelRef.current,{
        transform:'translateY(100%)',
      })
    }

  },[WaitingForDriverPanel]);


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/zoeDIJsJY3EHhRxIkVaUQOk4XPLJQ2SVubiyrENL3pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI3LzQ5Lzc3/LzM2MF9GXzI3NDk3/NzM2X0kyMVpodHd4/RnJ3SWxOQjcwSWdr/ckh1eVZQMlhoa1hw/LmpwZw" alt="" />

      <div className='h-screen w-screen '>
          {/* image for temporray use */}
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[25%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false);
          }} className='absolute opacity-0 right-6 top-6 text-3xl'>
              <i className="ri-arrow-down-wide-line"></i>
          </h5>
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
        <div ref={panelRef} className=' bg-white h-0'>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='w-full fixed z-20 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
          {/* both vehicle panel and confirm ride panel are req in the page for vehiclepanel */}
      </div>
      <div ref={confirmRidePanelRef} className='w-full fixed z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <ConfirmRide setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} setLookingForDriverPanel={setLookingForDriverPanel}/>
      </div>
      <div ref={LookingForDriverPanelRef} className='w-full fixed z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <LookingForDriver />
      </div>
      <div ref={WaitingForDriverPanelRef} className='w-full fixed z-20 bottom-0 bg-white px-3 py-6 pt-12'>
          <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel}/>
      </div>
            
    </div>
  )
}

export default Home