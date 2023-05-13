import wishListIcon from './wishListIcon.png'
import  './plantCard.css'



function PlantCard(
  props:{
    key:number,
    name:string,
    price:number,
    type:string,
    season:string,
    lighting_requirements:string,
    description:string,
    image_url:string, 
    onClick: Function,
    onClickWishList:Function
  })
    {
     
  return (
    <div className='plantCardDiv'>
        <img src={props.image_url} alt="" />
        <h5>{props.name}</h5>
        <h6>{props.price}$</h6>
        <p>{props.description}</p>
        <div id="butnWishIconDiv">
        <button onClick={()=>{props.onClick()}}>Add to cart</button>
        <img onClick={()=>{props.onClickWishList()}} src={wishListIcon} alt="" id="wishListIcon"/>
        </div>
    </div>
  )
}

export default PlantCard