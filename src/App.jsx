import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Teacher from './pages/Teacher'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
const App = () => {
  return (
   <>
   <Header />

   <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/Teacher' element={<Teacher/>} />
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
   </Routes>

    <Footer />

   </>
   )
}

export default App