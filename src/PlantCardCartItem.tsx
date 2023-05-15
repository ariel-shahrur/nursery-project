import React from 'react'
import './PlantCardCartItem.css'
import { PlantIntrfc } from './PlantIntrfc';
interface CartItemCounter {
  [key: string]: number;
}
function PlantCardCartItem(
    props:{
        
    name:string,
    price:number,
    image_url:string,
    onclick:Function,
    addToCart:Function,
    cartItemCounter:CartItemCounter
    }
) {
  return (
    <div className='PlantCardCartItem'>
      <div className='ImgNamePricePlantCartDiv'>
        <img src={props.image_url} alt="" />
        <div>
      <h5>{props.name}</h5>
      <h6>{props.price}$</h6>
      </div>
        </div>
     
      <div>
      <button className='xButton' onClick={()=>{}}>X</button>
      <div className='conterDiv'>
        <button onClick={()=>{props.onclick()}}>-</button>
      <div className='numberOfCounter' >{props.cartItemCounter[props.name]}</div>
      <button onClick={()=>{props.addToCart()}}>+</button>
      </div>
      </div>
        
        
        
    </div>
  )
}

export default PlantCardCartItem