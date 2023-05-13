import { PlantIntrfc } from './PlantIntrfc';
import './gallery.css'
import { useFetchData } from './fetchDataHook';

function Gallery() {
  const {data} :{data:any} = useFetchData();
 
  return (
    <div className='galleryDiv'>
      {data && data.map((curr:PlantIntrfc)=>{
        return <div className='galleryImg'><img src={curr.image_url} alt="" /></div>
        })}
    </div>
  )
}

export default Gallery