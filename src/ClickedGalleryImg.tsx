import { useParams } from 'react-router-dom'
import { useFetchData } from './dataContext/fetchDataHook';
import { PlantIntrfc } from './intrfc/PlantIntrfc';
import ExstraDetailPlantCard from './cardComponants/ExstraDetailPlantCard';

function ClickedGalleryImg(props: { addToCart: Function, addToWishList: Function }) {//component for navigate to bigger plant card when clicked on img in gallery
  const { data }: { data:PlantIntrfc[] } = useFetchData();


  const plantName = useParams().plantName || "";
  return (
    <div>
      {data && data.map((curr: PlantIntrfc) => {
        if (curr.name === plantName) {
          return <ExstraDetailPlantCard
            name={curr.name} price={curr.price}
            type={curr.type} season={curr.season}
            lighting_requirements={curr.lighting_requirements}
            description={curr.description}
            image_url={curr.image_url} key={curr.key}
            onClick={() => { props.addToCart(curr) }}
            onClickWishList={() => { props.addToWishList(curr) }}
          ></ExstraDetailPlantCard>
        }
      })}
    </div>
  )
}

export default ClickedGalleryImg