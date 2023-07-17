import './gallery.css'
import { useFetchDataFromServer } from './dataContext/fetchDataHook';
import GalleryImgCard from './cardComponants/GalleryImgCard';
import { PlantIntrfcNew } from './intrfc/PlantIntrfcNew';

function Gallery() {
  const { data }: { data: any } = useFetchDataFromServer();
  console.log("data from gallery",data);

  return (
    <div className='galleryDiv'>
      {data && data.map((curr: PlantIntrfcNew) => {
        return <GalleryImgCard image_url={curr.image_url} plantName={curr.plantName} key={curr.id}></GalleryImgCard>
      })}
    </div>
  )
}

export default Gallery