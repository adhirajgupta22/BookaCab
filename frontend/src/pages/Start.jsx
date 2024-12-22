import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='pt-5 bg-cover bg-center bg-[url(https://imgs.search.brave.com/0aNrhVMVuigTyJF2XgLASiqcvo0ZpPdB4xf4ILCA7Eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4Lzlh/L2RiLzA4OWFkYjEy/ZmIxOTM1ZDRlYzYz/YzM3ODJhOTU4MDYw/LmpwZw)] h-screen flex justify-between flex-col w-full'>
            <img className='ml-5 h-10 w-20' src="https://imgs.search.brave.com/zoeDIJsJY3EHhRxIkVaUQOk4XPLJQ2SVubiyrENL3pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI3LzQ5Lzc3/LzM2MF9GXzI3NDk3/NzM2X0kyMVpodHd4/RnJ3SWxOQjcwSWdr/ckh1eVZQMlhoa1hw/LmpwZw" alt="" />
            <div className='py-4 px-4 bg-white'>
                <h2 className='text-2xl font-bold'>Get Started with the App</h2>
                <Link to='/login'  className='flex items-center justify-center mt-5 w-full bg-black text-white py-3'>Continue </Link>
            </div>

        </div>
    </div>
  )
}

export default Start;