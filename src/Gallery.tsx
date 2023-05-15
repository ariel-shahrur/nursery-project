import { PlantIntrfc } from './intrfc/PlantIntrfc';
import './gallery.css'
import { useFetchData } from './dataContext/fetchDataHook';
import GalleryImgCard from './cardComponants/GalleryImgCard';

function Gallery() {
  const { data }: { data: PlantIntrfc[] } = useFetchData();

  return (
    <div className='galleryDiv'>
      {data && data.map((curr: PlantIntrfc) => {
        return <GalleryImgCard plant={curr}></GalleryImgCard>
      })}
    </div>
  )
}

export default Gallery