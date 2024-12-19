import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import {UserLogin} from './pages/UserLogin'  //there is a diff way to define the userLogin file see in the jsx file and compare to others
import UserSignup from './pages/UserSignup'
import DriverSignup from './pages/DriverSignup'
import DriverLogin from './pages/DriverLogin'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/signup' element={<UserSignup/>} />
          <Route path='/driver-login' element={<DriverLogin/>} />
          <Route path='/driver-signup' element={<DriverSignup/>} />
      </Routes>
    </div>
  )
}

export default App