import React,{useContext,useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { DriverDataContext } from '../context/DriverContext'
import axios from 'axios';


const DriverProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {driver,setDriver} = useContext(DriverDataContext);
    const [isLoading,setIsLoading] = useState(true);

    //console.log('token:',token);    

    useEffect(()=>{
            if(!token){
                navigate('/driver-login');
                alert('You need to login first');
            }
            //we need to be carefull here that the token we get is of the captain not the user

            axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/profile`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((response)=>{
                if(response.status === 200){
                    const data = response.data;
                    setDriver(data.driver);
                    setIsLoading(false);
                }
            }).catch(err =>{        //error will only come in case when the token is not valid ie it is not for the driver but for the user
                console.log(err);
                localStorage.removeItem('token');
                navigate('/driver-login');
            })
             
    },[token]);

    if(isLoading){
        return <div>Loading...</div>
    }

  return (
    <>
        {children}
    </>
  )
}

export default DriverProtectedWrapper