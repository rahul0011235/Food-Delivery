import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
    const {cartItems,food_list,removeFromCart}=useContext(StoreContext);
    // console.log(useContext(StoreContext));
    // console.log("---------",food_list, cartItems)
  return (
    <div className='cart'>
        <div className="cart-item">
            <div className="cart-item-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                    return(
                        <div>
                        <div className="cart-items-title cart-items-item">
                           <img src={item.image} alt="" />
                           <p>{item.name}</p>
                           <p>${item.price}</p>
                           <p>{cartItems[item._id]}</p>
                           <p>${item.price*cartItems[item._id]}</p>
                           <p onClick={()=>removeFromCart(item._id)}className='cross'>X</p>
                        </div>
                        <hr /></div>
                    )
                }
            })}
        </div>
      
    </div>
  )
}

export default Cart
