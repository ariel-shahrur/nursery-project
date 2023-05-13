import React from 'react'
import { PlantIntrfc } from './PlantIntrfc'
import PlantCard from './PlantCard';

function WishList(props:{wishList:PlantIntrfc[]}) {
  const wishList = props.wishList;
  return (
    <div>
    {wishList && wishList.map(( curr:PlantIntrfc)=>{ 
        return <PlantCard 
        name={curr.name} price={curr.price} 
        type={curr.type} season={curr.season}
         lighting_requirements={curr.lighting_requirements} 
         description={curr.description} 
         image_url={curr.image_url} key={curr.key}
         onClick={() => {console.log('Cant add to cart from cart')}}
         onClickWishList={()=>{}}
         ></PlantCard>
        })}
  </div>
  )
}

export default WishList