import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState,useEffect } from "react";

export const ContextStore = createContext(null)

const StoreContextProvider = (props) => {

const [CartItems,SetCartItems]= useState({})

 console.log(food_list);
 
const AdToCart = (ItemId)=>{
   if(!CartItems[ItemId]){
    SetCartItems((prev)=>({...prev,[ItemId]:1}))
}else{
    SetCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
}
}
const removeFromCart = (ItemId)=>{
    SetCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
}


useEffect(()=>{
    console.log(CartItems);
},[CartItems])



    const contextValue = {
        food_list,
        CartItems, 
        SetCartItems,
        AdToCart,
        removeFromCart
    }
    return (
        <ContextStore.Provider value={contextValue}>
            {props.children}
        </ContextStore.Provider>
    );
};
export default StoreContextProvider;