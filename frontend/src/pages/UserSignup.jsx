import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lasttName,setLastName] = useState('');
  const [userData,setUserData] = useState({});


  const submitHandler = (e)=>{
      e.preventDefault();
      setUserData({
        fullName:{
          firstname:firstName,
          lastname: lasttName
        },
        email:email,
        password:password
      })
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
        <div>
            <img className='w-16 mb-4' src="https://imgs.search.brave.com/zoeDIJsJY3EHhRxIkVaUQOk4XPLJQ2SVubiyrENL3pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI3LzQ5Lzc3/LzM2MF9GXzI3NDk3/NzM2X0kyMVpodHd4/RnJ3SWxOQjcwSWdr/ckh1eVZQMlhoa1hw/LmpwZw" alt="" />
            <form onSubmit={(e)=>{
                submitHandler(e);   
            }}>

                <h3 className='text-lg mb-2 font-medium' >What's your Name</h3>
                <div className='flex gap-4 mb-5'>
                <input 
                    required
                    value={firstName}
                    onChange={(e)=>{
                      setFirstName(e.target.value);
                    }}
                    className='w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base '
                    type='text' 
                    placeholder='Firstname' 
                />
                <input 
                    required
                    value={lasttName}
                    onChange={(e)=>{
                      setLastName(e.target.value);
                    }}
                    className='w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base '
                    type='text' 
                    placeholder='Lastname' 
                />
                </div>
                <h3 className='text-lg mb-2 font-medium' >What's your email?</h3>
                <input 
                    required
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                    type='email' 
                    placeholder='email@example.com' 
                />

                <h3 className='text-lg mb-2 font-medium'>Enter Password</h3> 

                <input 
                    required  
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                    type="password"  
                    placeholder='your password'
                />
                
                <button
                    className=' bg-[#111] text-white  mb-3 font-semibold rounded px-4 py-2 w-full text-lg'
                >SignUp </button>

                <p className='text-center mb-4' >Already have an account? <Link className='text-blue-600'  to='/login'>Sign In</Link></p>
            </form>
        </div>
        <div>
            <Link
                to='/driver-signup'
                className='flex items-center justify-center  bg-[#10b461] text-white  mb-5 font-semibold rounded px-4 py-2 w-full text-lg'
                >Register as Driver
            </Link>
        </div>
    </div>  
  )
}

export default UserSignup