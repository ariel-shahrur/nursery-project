import CartSummeryAmountBar from "./CartSummeryAmountBar";
import './Cart.css'
import { useFetchCartItemData } from './dataContext/fetchDataHook';
import CartItemNew from "./cardComponants/CartItemNew";
import { CartItemIntrfc } from "./intrfc/CartItemIntrfc";
import {  handlerForMakeOrder} from "./btnHandlers/handlers";



  function Cart() {
    const { data }:  { data: CartItemIntrfc[]| {token: string}} = useFetchCartItemData();
  return (
    
    
    <div id="cartDiv">
      <h1>Shopping Bag</h1>
      { !Array.isArray(data)&& <h3>Please log in to add to cart</h3>}
      {(Array.isArray(data) && (data.length ===0)) && <h3>Your cart is empty, add plants to see them here</h3>}
      <div id="allCartItem">
        {(Array.isArray(data)&& (data.length !=0)) && data.map((curr:CartItemIntrfc)=>{
          return <CartItemNew cartItem={curr} key={curr.plantId}></CartItemNew>
        })
        }
      </div>
      {(Array.isArray(data)&& (data.length !=0))&&<button onClick={()=>{handlerForMakeOrder();window.location.reload()}}>Make an Order</button>}
      {(Array.isArray(data)&& (data.length !=0))&&<CartSummeryAmountBar cart={data}></CartSummeryAmountBar>}
    </div>
  )
}

export default Cart