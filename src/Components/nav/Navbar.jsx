import React, { useState } from 'react'
import { ContextStore } from './../../ContextApi/ContextStore';
import { useContext } from 'react'
import "./Navbar.css"
import {assets} from "./../../assets/assets"
import{Link} from "react-router-dom"
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]= useState("mobile-aap")
const {getTotalCartQty}=useContext(ContextStore)

  return (
    <div className='Navbar'>
  <Link to="/"> <img src={assets.logo} alt="" className="logo" /> </Link> 
    <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu === "home"?"active":''}>Home</Link>
        <a href='#Explore' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
        <a href='#App-download' onClick={()=>setMenu("mobile-aap")} className={menu === "mobile-aap"?"active":""}>Mobile-App</a>
        <a href='#Footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
    </ul>
    <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="nav-search-icon">
           <Link to="/cart"> <img src={assets.basket_icon} alt="" /> </Link>
            <div className={getTotalCartQty()===0?"":'dot'}></div>
          </div>
          <div>
            <button onClick={()=>setShowLogin(true)} className='btn'>Sign In</button>
            </div>  
    </div>
    </div>
  )
}

export default Navbar