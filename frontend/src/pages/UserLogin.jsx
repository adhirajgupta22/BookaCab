import React, { useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UserLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    //const [userData,setUserData] = useState({})

    const {user,setUser} = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();

        const userData = {
            email:email,
            password:password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                
                localStorage.setItem('token',data.token);
                navigate('/home');
            }
            setEmail('');
            setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
        <div>
            <img className='w-16 mb-4' src="https://imgs.search.brave.com/zoeDIJsJY3EHhRxIkVaUQOk4XPLJQ2SVubiyrENL3pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI3LzQ5Lzc3/LzM2MF9GXzI3NDk3/NzM2X0kyMVpodHd4/RnJ3SWxOQjcwSWdr/ckh1eVZQMlhoa1hw/LmpwZw" alt="" />
            <form onSubmit={(e)=>{
                submitHandler(e);
            }}>
                <h3 className='text-lg mb-2 font-medium' >What's your email?</h3>
                <input 
                    required 
                    value={email}
                    onChange={(e)=>{
                        //console.log(e.target.value); //this is to print in console but for giving the value on email we call setEmail function
                        setEmail(e.target.value);

                    }}
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                    type='email' 
                    placeholder='email@example.com' 
                />

                <h3 className='text-lg mb-2 font-medium'>Enter Password</h3> 

                <input 
                    required 
                    value={password}
                    onChange={(e)=>{
                        //console.log(e.target.value); //this is to print in console but for giving the value on email we call setEmail function
                        setPassword(e.target.value);

                    }}
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                    type="password"  
                    placeholder='your password'
                />
                
                <button
                    className=' bg-[#111] text-white  mb-3 font-semibold rounded px-4 py-2 w-full text-lg'
                >Login</button>

                <p className='text-center mb-4' >New here? <Link className='text-blue-600'  to='/signup'>Create new Account</Link></p>
            </form>
        </div>
        <div>
            <Link
                to='/driver-login'
                className='flex items-center justify-center  bg-[#10b461] text-white  mb-5 font-semibold rounded px-4 py-2 w-full text-lg'
                >Sign in as Driver
            </Link>
        </div>
    </div>
  )
}
