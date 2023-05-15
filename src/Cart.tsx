import CartSummeryAmountBar from "./CartSummeryAmountBar";
import PlantCard from "./PlantCard"
import PlantCardCartItem from "./PlantCardCartItem";
import { PlantIntrfc } from "./PlantIntrfc";
import './Cart.css'
interface CartItemCounter {
  [key: string]: number;
}

function Cart(props:{cart: PlantIntrfc[],removeFromCart:Function,cartSum:number,cartItemCounter:CartItemCounter}) {
 console.log(props.cartItemCounter);
 
  const cart = props.cart;
  return (
    <div id="cartDiv">
      <h1>Shopping Bag</h1>
      <div id="allCartItem">
        {cart && cart.map(( curr:PlantIntrfc, index)=>{ 
          return <PlantCardCartItem 
          name={curr.name} price={curr.price} 
           image_url={curr.image_url} key={index}
           onclick={()=>{props.removeFromCart(index,curr.price,curr.name)}}
           cartItemCounter={props.cartItemCounter}
           ></PlantCardCartItem>
          })}
      </div>
      <CartSummeryAmountBar cart={props.cart} cartSum={props.cartSum}></CartSummeryAmountBar>
      
    </div>
  )
}

export default Cart