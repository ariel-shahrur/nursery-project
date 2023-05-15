import React from 'react'
import { PlantIntrfc } from './intrfc/PlantIntrfc'
import PlantCard from './cardComponants/PlantCard';
import './WishList.css'

function WishList(
  props: {
    wishList: PlantIntrfc[],
    addToCart: Function,
    removeFromWishList: Function
  }) {
  const wishList = props.wishList;
  return (
    <div className='wishListDiv'>
      <h1>My Favorite </h1>
      <div className='wishListItemDiv'>
        {wishList && wishList.map((curr: PlantIntrfc, index) => {
          return <PlantCard
            name={curr.name} price={curr.price}
            type={curr.type} season={curr.season}
            lighting_requirements={curr.lighting_requirements}
            description={curr.description}
            image_url={curr.image_url} key={curr.key}
            onClick={() => { props.addToCart(curr) }}
            onClickWishList={() => { props.removeFromWishList(index) }}
          ></PlantCard>
        })}
      </div>
    </div>
  )
}

export default WishList