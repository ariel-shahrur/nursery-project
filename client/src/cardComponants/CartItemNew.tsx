import './PlantCardCartItem.css'
import { CartItemIntrfc } from '../intrfc/CartItemIntrfc';
import { handlerForAddToCart,handlerForRemoveFromCart } from "../btnHandlers/handlers";


function CartItemNew(
  props: {
    cartItem:CartItemIntrfc,
  }

) {
  return (
    <div className='PlantCardCartItem'>
      <div className='ImgNamePricePlantCartDiv'>
        <img src={props.cartItem.image_url} alt="" />
        <div>
          <h5>{props.cartItem.plantName}</h5>
          <h6>{props.cartItem.price}$</h6>
        </div>
      </div>

      <div>
        <div className='conterDiv'>
          <button onClick={()=>{handlerForRemoveFromCart(props.cartItem.plantId);  window.location.reload()}}>-</button>
          <button onClick={()=>{handlerForAddToCart(props.cartItem.plantId); window.location.reload()}}>+</button >
          <div className='numberOfCounter' >{props.cartItem.quantity}</div>
        </div>
      </div>



    </div>
  )
}

export default CartItemNew