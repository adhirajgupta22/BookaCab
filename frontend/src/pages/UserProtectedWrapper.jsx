import React,{useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserDataContext);
    const [isLoading,setIsLoading] = useState(true);

    //console.log('token:',token);    

    useEffect(()=>{
        if(!token){
            navigate('/login');
            alert('You need to login first');
        }   

        //if the token is present lets extract the tokens from the headers
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if(response.status === 200){
                const data = response.data;
                setUser(data.user);
                setIsLoading(false);
            }
        }).catch(err =>{        //error will only come in case when the token is not valid
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login');
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

export default UserProtectedWrapper