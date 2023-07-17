import { useNavigate } from 'react-router-dom';

function GalleryImgCard(props: { image_url:string,plantName:string,key:number }) {
  const navigate = useNavigate();
  return (
    // onClick={() => {
    //   navigate(`/gallery/${props.plant.name}`)
    // }}
    <div className='galleryCard' >
      <img src={props.image_url} alt="" />
      <h5>{props.plantName}</h5>
    </div>
  )
}

export default GalleryImgCard