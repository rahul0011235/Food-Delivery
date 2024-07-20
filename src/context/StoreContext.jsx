import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const[cartItems,setCartItems]=useState([]);

    const addToCart =(itemId) =>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1})) 
            // addelement in cart if item not there thean add it other wise increase it
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        // console.log(cartItems);
    }
   const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }


const contextvalue={
   food_list,
   cartItems,
   setCartItems,
   addToCart,
   removeFromCart,
}
useEffect(()=>{
    console.log(cartItems);

},[cartItems])

return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
)

}
export default StoreContextProvider