import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Teacher from './pages/Teacher'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import RegistrationForm from './pages/RegistrationForm'
import Login from './pages/Login'
import MainPage from './pages/MainPage'
const App = () => {
  return (
   <>
   <Header />

   <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/Teacher' element={<Teacher/>} />
    <Route  path='/register' element={<RegistrationForm/>} />

    <Route  path='/login' element={<Login/>} />
    <Route  path='/mainpage' element={<MainPage/>} />
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
   </Routes>

    <Footer />

   </>
   )
}

export default App