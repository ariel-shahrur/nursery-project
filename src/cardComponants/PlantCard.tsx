import Cookies from 'js-cookie';
import wishListIcon from '../wishListIcon.png'
import './plantCard.css'
import { PlantIntrfcNew } from '../intrfc/PlantIntrfcNew';
import {  handlerForAddToCart} from "../btnHandlers/handlers";

function PlantCard(
  props: {
    plant:PlantIntrfcNew
  }) {
    
  return (
    <div className='plantCardDiv'>
      <img src={props.plant.image_url} alt="" />
      <h5>{props.plant.plantName}</h5>
      <h6>{props.plant.price}$</h6>
      <p>{props.plant.description_}</p>
      <div id="butnWishIconDiv">
        <input type="button" value="add to cart" onClick={()=>{handlerForAddToCart(props.plant.id)}} />
      </div>
    </div>
  )
}

export default PlantCard