import { PlantIntrfc } from './PlantIntrfc';
import './gallery.css'
import { useFetchData } from './fetchDataHook';
import GalleryImgCard from './GalleryImgCard';

function Gallery() {
  const {data} :{data:any} = useFetchData();
 
  return (
    <div className='galleryDiv'>
      {data && data.map((curr:PlantIntrfc)=>{
        return <GalleryImgCard plant={curr}></GalleryImgCard>
        })}
    </div>
  )
}

export default Gallery