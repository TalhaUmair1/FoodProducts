import React from 'react'
import { useContext } from 'react'
import './Food.css'
import { ContextStore } from './../../ContextApi/ContextStore';
import FoodItems from '../FoodItems/FoodItems'
import { useEffect } from 'react';
function FoodDisplay({catagory}) {
    const {food_list}=useContext(ContextStore)
    console.log(food_list);
    
  return (
    <div className='Food0display' id='Food0display'>
        <h2>Top Dishes Near You</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{

            if(catagory==="all" || item.category===catagory){
                return(
                    <FoodItems key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}></FoodItems>
                )
            }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay