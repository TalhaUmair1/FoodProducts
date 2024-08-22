import React from 'react'
import Navbar from './Components/nav/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import Login from './Components/LOginPOPUp/Login';
import { useState } from 'react';

const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}></Login>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='Cart' element={<Cart/>}></Route>
    <Route path='Order' element={<PlaceOrder></PlaceOrder>}></Route>
   </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App;