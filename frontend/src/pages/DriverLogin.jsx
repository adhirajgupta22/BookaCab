import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { DriverDataContext } from '../context/DriverContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const DriverLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {driver,setDriver} = useContext(DriverDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();  //this is to prevent the default behaviour of the form
        
        const driverData = {
            email:email,
            password:password
        } 
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/login`,driverData);
        if(response.status === 200){
            const data = response.data;

            setDriver(data.driver);
            localStorage.setItem('token',data.token);
            navigate('/driver-home');
        }

        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
        <div>
            <img className='w-16 mb-4' src="https://imgs.search.brave.com/8d_F-8k4FucMVrK0-GA-xlJiK-WiGDIIaWotDzRqsIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWN0aXZpdGll/cy1mbGF0LWNvbG9y/ZnVsLzIwNDgvMjEy/NV8tX0NhYl9kcml2/ZXItMTI4LnBuZw" alt="" />
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

                <p className='text-center mb-4' >New here? <Link className='text-blue-600'  to='/driver-signup'>Create new Driver Account</Link></p>
            </form>
        </div>
        <div>
            <Link
                to='/login'
                className='flex items-center justify-center  bg-[#d5622d] text-white  mb-5 font-semibold rounded px-4 py-2 w-full text-lg'
                >Sign in as user
            </Link>
        </div>
    </div>
  )
}

export default DriverLogin