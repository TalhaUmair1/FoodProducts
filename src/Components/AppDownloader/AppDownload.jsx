import React from 'react'
import './AppDownload.css'
import { assets } from './../../assets/assets';
function AppDownload() {
  return (
    <div className='App-download' id='App-download'>
 <p>For Better Experience Download <br /> Tomato App</p>
  <div className="app">
    <img className='img' src={assets.play_store}alt="" />
    <img className='img' src={assets.app_store}alt="" />
  </div>
    </div>
  )
}

export default AppDownload