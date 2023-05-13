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
        <button onClick={()=>{props.onclick()}}>X</button>
        <img src={props.image_url} alt="" />
        <h5>{props.name}</h5>
        <h6>{props.price}$</h6>
    </div>
  )
}

export default PlantCardCartItem