import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Start'
import {UserLogin} from './pages/UserLogin'  //there is a diff way to define the userLogin file see in the jsx file and compare to others
import UserSignup from './pages/UserSignup'
import DriverSignup from './pages/DriverSignup'
import DriverLogin from './pages/DriverLogin'
import Home from './pages/Home'  //for user home
import DriverHome from './pages/DriverHome'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import DriverProtectedWrapper from './pages/DriverProtectedWrapper'
import UserLogout from './pages/UserLogout'
import DriverLogout from './pages/DriverLogout'


const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/signup' element={<UserSignup/>} />
          <Route path='/driver-login' element={<DriverLogin/>} />
          <Route path='/driver-signup' element={<DriverSignup/>} />
          <Route path='/home' 
            element={
              <UserProtectedWrapper>
                <Home/>
              </UserProtectedWrapper>
            } />
          <Route path='/user/logout' 
            element={
              <UserProtectedWrapper>
                <UserLogout/>
              </UserProtectedWrapper>
            } />

          <Route path='/driver-home' 
            element={
              <DriverProtectedWrapper>
                <DriverHome/>
              </DriverProtectedWrapper>
            } />

          <Route path='/driver/logout'
           element={
              <DriverProtectedWrapper>
                <DriverLogout/>
              </DriverProtectedWrapper>
           } />
      </Routes>
    </div>
  )
}

export default App