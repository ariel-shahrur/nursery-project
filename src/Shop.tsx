import React, { useContext, useState } from 'react'
import { AllDataStore } from './DataContext';
import { PlantIntrfc } from './PlantIntrfc';
import PlantCard from './PlantCard';
import './shop.css'
import SearchByType from './SearchByType';

function Shop() {
  const {plantsArr,setPlantsArr}= useContext(AllDataStore);


  return (
    <div>
      <div id="headerDiv">
      <h1>Our Shop</h1>
      </div>
      
      <SearchByType ></SearchByType>

      {<div className='productDiv'>
      {plantsArr.map(( curr:PlantIntrfc)=>{ 
          return <PlantCard 
          name={curr.name} price={curr.price} 
          type={curr.type} season={curr.season}
           lighting_requirements={curr.lighting_requirements} 
           description={curr.description} 
           image_url={curr.image_url} key={curr.key}
           ></PlantCard>
          })}
    </div>}
    </div>
  )
}

export default Shop

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
