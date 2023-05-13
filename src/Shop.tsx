import { PlantIntrfc } from './PlantIntrfc';
import PlantCard from './PlantCard';
import './shop.css'
import SearchByType from './SearchByType';
import { useFetchData } from './fetchDataHook';
import { useState } from 'react';


function Shop(props: {addToCart: Function,addToWishList:Function}) {

  const {data} :{data:any} = useFetchData();
  const [type, setType] = useState('all');

  return (
    <div>
      <div id="headerDiv">
      <h1>Our Shop</h1>
      </div>
      
      <SearchByType  changeType={setType} ></SearchByType>

      {<div className='productDiv'>
      {data && data.map(( curr:PlantIntrfc)=>{ 
          return (type === 'all' || curr.type.toLowerCase()=== type.toLowerCase()) && 
          <PlantCard 
          name={curr.name} price={curr.price} 
          type={curr.type} season={curr.season}
           lighting_requirements={curr.lighting_requirements} 
           description={curr.description} 
           image_url={curr.image_url} key={curr.key}
           onClick={() => {props.addToCart(curr)}}
           onClickWishList={()=>{props.addToWishList(curr)}}
           ></PlantCard>
          })}
    </div>}
    </div>
  )
}

export default Shop


