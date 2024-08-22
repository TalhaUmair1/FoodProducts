import React from 'react'
import "./FoodItems.css"
import {assets} from "../../assets/assets"
import { useContext } from 'react'
import { ContextStore } from './../../ContextApi/ContextStore';
const FoodItems = ({id,name,image,price,description}) => {

  
  const {CartItems,AddToCart,removeFromCart}=useContext(ContextStore)
    
 console.log(CartItems);
 

  return (
    <div className='Food-items'>
    <div className="Food-item-image-container">
        <img className='Food-item-image' src={image} alt="" />
        {
          !CartItems && CartItems[id]
          ? <img className='add' onClick={() =>AdToCart(id)} src={assets.add_icon_white} alt=""/>
          : <div className="foodItemCounter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{CartItems[id]}</p>
              <img  onClick={()=> AddToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
    </div>
    <div className="fooditem-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <div >
            <p className="Fooditem-description">{description}</p>
            <p className="foodPrice">${price}</p>
           
        </div>
    </div>
    </div>
  )
}

export default FoodItems