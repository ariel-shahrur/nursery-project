import React from 'react'
import { PlantIntrfc } from './PlantIntrfc'
import { useNavigate } from 'react-router-dom';

function GalleryImgCard(props:{plant:PlantIntrfc}) {
    const navigate = useNavigate();
  return (
    <div className='galleryCard' onClick={()=>{
        navigate(`/gallery/${props.plant.name}`)
    }}>
        <img src={props.plant.image_url} alt="" />
        <h5>{props.plant.name}</h5>
    </div>
  )
}

export default GalleryImgCard