import CartSummeryAmountBar from "./CartSummeryAmountBar";
import PlantCard from "./PlantCard"
import PlantCardCartItem from "./PlantCardCartItem";
import { PlantIntrfc } from "./PlantIntrfc";
import './Cart.css'


function Cart(props:{cart: PlantIntrfc[],removeFromCart:Function,cartSum:number}) {
 
  const cart = props.cart;
  return (
    <div id="cartDiv">
      <h1>Shopping Bag</h1>
      <div id="allCartItem">
        {cart && cart.map(( curr:PlantIntrfc, index)=>{ 
          return <PlantCardCartItem 
          name={curr.name} price={curr.price} 
           image_url={curr.image_url} key={index}
           onclick={()=>{props.removeFromCart(index,curr.price)}}
           ></PlantCardCartItem>
          })}
      </div>
      <CartSummeryAmountBar cart={props.cart} cartSum={props.cartSum}></CartSummeryAmountBar>
      
    </div>
  )
}

export default Cart