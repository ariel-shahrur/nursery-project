import CartSummeryAmountBar from "./CartSummeryAmountBar";
import './Cart.css'
import { useFetchCartItemData } from './dataContext/fetchDataHook';
import CartItemNew from "./cardComponants/CartItemNew";
import { CartItemIntrfc } from "./intrfc/CartItemIntrfc";
import {  handlerForMakeOrder} from "./btnHandlers/handlers";

  function Cart() {
    const { data }: { data: CartItemIntrfc[] } = useFetchCartItemData();
    console.log(data);
    
  return (
    <div id="cartDiv">
      <h1>Shopping Bag</h1>
      <div id="allCartItem">
        {(data.length !=0) && data.map((curr:CartItemIntrfc)=>{
          return <CartItemNew cartItem={curr} key={curr.plantId}></CartItemNew>
        })
        }
      </div>
      <button onClick={()=>{handlerForMakeOrder()}}>Make an Order</button>
      {<CartSummeryAmountBar cart={data}></CartSummeryAmountBar>}
    </div>
  )
}

export default Cart