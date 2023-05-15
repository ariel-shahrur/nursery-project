import React from 'react'
import { useParams } from 'react-router-dom'
import PlantCard from './PlantCard';
import { useFetchData } from './fetchDataHook';
import { log } from 'console';
import { PlantIntrfc } from './PlantIntrfc';
import ExstraDetailPlantCard from './ExstraDetailPlantCard';

function ClickedGalleryImg(props: {addToCart: Function,addToWishList:Function}) {
    const {data} :{data:any} = useFetchData();
    
    
    const plantName = useParams().plantName || "";
  return (
    <div>
        {data && data.map((curr:PlantIntrfc)=>{
            if(curr.name===plantName){
                return <ExstraDetailPlantCard 
                name={curr.name} price={curr.price} 
                type={curr.type} season={curr.season}
                 lighting_requirements={curr.lighting_requirements} 
                 description={curr.description} 
                 image_url={curr.image_url} key={curr.key}
                 onClick={() => {props.addToCart(curr)}}
                 onClickWishList={()=>{props.addToWishList(curr)}}
                 ></ExstraDetailPlantCard>
            }
        })}
    </div>
  )
}

export default ClickedGalleryImg