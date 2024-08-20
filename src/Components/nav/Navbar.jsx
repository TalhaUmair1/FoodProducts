import React, { useState } from 'react'
import "./Navbar.css"
import {assets} from "./../../assets/assets"
const Navbar = () => {
    const [menu,setMenu]= useState("mobile-aap")
  return (
    <div className='Navbar'>
    <img src={assets.logo} alt="" className="logo" />
    <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home"?"active":''}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-aap")} className={menu === "mobile-aap"?"active":""}>Mobile-App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</li>
    </ul>
    <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="nav-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <div>
            <button className='btn'>Sign In</button>
            </div>  
    </div>
    </div>
  )
}

export default Navbar