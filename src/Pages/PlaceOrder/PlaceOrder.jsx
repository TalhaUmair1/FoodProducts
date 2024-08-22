import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { ContextStore } from '../../ContextApi/ContextStore'
const PlaceOrder = () => {
  const {  getTotalCartQty } = useContext(ContextStore);
  return (
    <form className='Place-order'>
     <div className="order-right">
      <p className="title">
        Delivery Informations
      </p>
      <div className="multi-fields">
        <input type="text"placeholder='First Name' />
        <input type="text" placeholder='last Name' />
      </div>
      <input type="email" placeholder='Enter your Email' />
      <input type="text" placeholder='Enter your Address' />
      <div className="multi-fields">
        <input type="text"placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text"placeholder='Zip Code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text"  placeholder='Phone'/>
     </div>
     <div className="order right">
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
      <p  className="check1">Payment</p>
  </div>
     </div>
    </form>
  )
}

export default PlaceOrder