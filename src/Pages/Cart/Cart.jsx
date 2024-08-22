import React, { useContext } from "react";
import "./Cart.css";
import { food_list } from "./../../assets/assets";
import { ContextStore } from "./../../ContextApi/ContextStore";
import { assets } from "./../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { CartItems, food_list, removeFromCart, getTotalCartQty } = useContext(ContextStore);
  console.log(CartItems);
  const navigate = useNavigate();
  return (
    <>
    <div className="cart">
      <div className="Cartitems">
        <div className="cartsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>ToTal</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (CartItems[item._id] >0) {
            
            return (
              <div className="carts1" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.quantity}</p>
                <p>${item.price *item.quantity}</p>
                <p className="remove" onClick={() => removeFromCart(item._id)}>x</p>
                <hr />
                <img
                  onClick={() => removeFromCart(item._id)}
                  src={assets.remove_icon}
                  alt=""
                />
               
              </div>
            );
          }
        })}
      </div>
    </div>
 <div className="cart-footer">
  <div className="cart-total">
    <h2>Carts Total</h2>
    <div>
      <div className="Cart-total-details">
        <p>Subtotal</p>
        <p>${getTotalCartQty()}</p>
      </div>
      <hr />
      <div className="Cart-total-details">
        <p>Delivery Fee</p>
        <p>${2}</p>
      </div>
      <hr />
      <div className="Cart-total-details">
        <p>Total</p>
      <p>${getTotalCartQty()+2}</p>
      </div>

    </div>
      <p onClick={() => navigate("/order")} className="check1">Checkout</p>
  </div>
  <div className="cart-pro">
    <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, laudantium?</p>
      <div>
        <input type="text" placeholder="promo code" />
      <p className="check2">Submit</p>
      </div>
    </div>
  </div>
 </div>
  </>
  );
};

export default Cart;
