import { CartItemCounter } from './intrfc/CartItemCounterIntrfc';
import { PlantIntrfc } from './intrfc/PlantIntrfc'


function CartSummeryAmountBar(props: { cart: PlantIntrfc[], cartSum: number, cartItemCounter: CartItemCounter }) {
  const cart = props.cart;

  return ((cart.length === 0 && <div></div>) || //check if the cart is empty 
    <div id='CartSummeryAmountBar'>
      <div>
        <h1>Summery</h1>
        {cart && cart.map((curr: PlantIntrfc) => {
          return (
            <div>{curr.price} X {props.cartItemCounter[curr.name]}</div>
          )
        })}
      </div>
      <hr style={{ height: "4px", backgroundColor: "black" }} />
      <div id='summeryDiv'><b>total: </b>{(Math.round(props.cartSum * 100) / 100).toFixed(2)}</div>
    </div>
  )
}

export default CartSummeryAmountBar