import React, { useContext } from 'react'
import { AllDataStore } from './DataContext';
import PlantCard from './PlantCard';
import { PlantIntrfc } from './PlantIntrfc';

function Cart() {
  const {cartArr,setCartArr}= useContext(AllDataStore);
  // const {plantsArr,setPlantsArr}= useContext(AllDataStore);
  console.log(cartArr[0]);
  
  return (
    <div>
      {cartArr.map(( curr:PlantIntrfc)=>{
        console.log(curr.name);
         
          return <PlantCard 
          name={curr.name} price={curr.price} 
          type={curr.type} season={curr.season}
           lighting_requirements={curr.lighting_requirements} 
           description={curr.description} 
           image_url={curr.image_url} key={curr.key}
           ></PlantCard>
          })}
    </div>
  )
}

export default Cart