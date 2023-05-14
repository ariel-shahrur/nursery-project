import React from 'react'
import './PlantCardCartItem.css'

function PlantCardCartItem(
    props:{
        
    name:string,
    price:number,
    image_url:string,
    onclick:Function
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
      <button onClick={()=>{props.onclick()}}>X</button>
      </div>
        
        
        
    </div>
  )
}

export default PlantCardCartItem