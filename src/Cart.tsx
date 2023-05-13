import PlantCard from "./PlantCard"
import PlantCardCartItem from "./PlantCardCartItem";
import { PlantIntrfc } from "./PlantIntrfc"


function Cart(props:{cart: PlantIntrfc[],removeFromCart:Function}) {
 
  const cart = props.cart;
  return (
    <div>
      {cart && cart.map(( curr:PlantIntrfc, index)=>{ 
          return <PlantCardCartItem 
          name={curr.name} price={curr.price} 
           image_url={curr.image_url} key={index}
           onclick={()=>{props.removeFromCart(index)}}
           ></PlantCardCartItem>
          })}
    </div>
  )
}

export default Cart