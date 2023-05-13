import React, { useContext } from 'react'
import { AllDataStore } from './DataContext';
import { PlantIntrfc } from './PlantIntrfc';
import './gallery.css'
import { useParams } from 'react-router-dom';

function Gallery() {
  const theType=useParams().type;
  console.log(theType);
  
  const {plantsArr}= useContext(AllDataStore);
  // console.log(plantsArr.filter((curr:PlantIntrfc)=>{

  // }));
  
  return (
    <div className='galleryDiv'>
      {plantsArr.map((curr:PlantIntrfc)=>{
        return <div className='galleryImg'><img src={curr.image_url} alt="" /></div>
        })}
    </div>
  )
}

export default Gallery