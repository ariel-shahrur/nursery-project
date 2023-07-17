import { useEffect, useState } from 'react';
import { CartItemIntrfc } from './intrfc/CartItemIntrfc';

function CartSummeryAmountBar(props: { cart: CartItemIntrfc[]}) {
  const [cartSum, setCartSum] = useState(0);
  useEffect(() => {
    let total = 0;
    props.cart.forEach((curr: CartItemIntrfc) => {
      total += curr.price * curr.quantity;
    });
    setCartSum(total);
  }, [props.cart]);
  
  return ((props.cart.length === 0 && <div></div>) || //check if the cart is empty 
    <div id='CartSummeryAmountBar'>
      <div>
        <h1>Summery</h1>
        {props.cart && props.cart.map((curr: CartItemIntrfc) => {
          return (
            <div>{curr.price} X {curr.quantity}</div>
          )
        })}
      </div>
      <hr style={{ height: "4px", backgroundColor: "black" }} />
      <div id='summeryDiv'><b>total: </b>${(Math.round(cartSum * 100) / 100).toFixed(2)}</div>
    </div>
  )
}
export default CartSummeryAmountBar