import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const DriverSignup = () => {

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
            <img className='w-16 mb-4' src="https://imgs.search.brave.com/8d_F-8k4FucMVrK0-GA-xlJiK-WiGDIIaWotDzRqsIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWN0aXZpdGll/cy1mbGF0LWNvbG9y/ZnVsLzIwNDgvMjEy/NV8tX0NhYl9kcml2/ZXItMTI4LnBuZw" alt="" />
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

                <p className='text-center mb-4' >Already have an account? <Link className='text-blue-600'  to='/driver-login'>Sign In</Link></p>
            </form>
        </div>
        <div>
            <Link
                to='/signup'
                className='flex items-center justify-center  bg-[#d5622d] text-white  mb-5 font-semibold rounded px-4 py-2 w-full text-lg'
                >Register as User
            </Link>
        </div>
    </div>
  )
}

export default DriverSignup