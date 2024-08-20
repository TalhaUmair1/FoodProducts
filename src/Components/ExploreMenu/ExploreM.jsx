import React from 'react'
import "/src/Components/ExploreMenu/ExploreM.css"
import {menu_list}from "/src/assets/assets"

function ExploreM({catagory,Setcatagory}) {
  return (
    <div className='ExploreM' id='Explore'>
      <h1>Explore Our Menu</h1>
    <p  className='Explore-menu-txt'>A menu is a detailed list of options offered to the customer when they come to eat or drink at the restaurant or bar. They offer a wide variety of choices, and are priced</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>Setcatagory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className="explore-menu-item">
                <img className={catagory===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <h3>{item.menu_name}</h3>
                <p>{item.price}</p>
                </div>
            )
        })}
    </div>
    <hr className='hr'></hr>
    </div>
  )
}

export default ExploreM