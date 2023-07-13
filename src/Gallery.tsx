import { PlantIntrfc } from './intrfc/PlantIntrfc';
import './gallery.css'
import { useFetchData,useFetchDataFromServer } from './dataContext/fetchDataHook';
import GalleryImgCard from './cardComponants/GalleryImgCard';

function Gallery() {
  const { data }: { data: PlantIntrfc[] } = useFetchData();
console.log(useFetchDataFromServer().data[0]);
const tempArr=useFetchDataFromServer().data[0];

  return (
    <div className='galleryDiv'>
      {data && data.map((curr: PlantIntrfc) => {
        return <GalleryImgCard plant={curr}></GalleryImgCard>
      })}
    </div>
  )
}

export default Gallery