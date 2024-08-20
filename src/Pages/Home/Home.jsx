import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreM from '../../Components/ExploreMenu/ExploreM'
import FoodDisplay from './../../Components/Fooddisplay/FoodDisplay';
const Home = () => {
  const [catagory,Setcatagory]= useState("all")
  return (
    <div>
      <Header></Header>
      <ExploreM catagory={catagory} Setcatagory={Setcatagory}></ExploreM>
     < FoodDisplay catagory={catagory}></FoodDisplay>
    </div>
  )
}

export default Home