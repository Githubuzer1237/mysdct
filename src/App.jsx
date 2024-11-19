import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Teacher from './pages/Teacher'
const App = () => {
  return (
   <>
   <Routes>
    <Route  path='/' element={<Teacher/>} />
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}
    {/* <Route  path='/' element={</>} /> */}


   </Routes>
   </>
   )
}

export default App