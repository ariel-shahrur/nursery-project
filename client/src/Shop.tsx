import PlantCard from './cardComponants/PlantCard';
import './shop.css'
import SearchByType from './SearchByType';
import { useFetchDataFromServer } from './dataContext/fetchDataHook';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlantIntrfcNew } from './intrfc/PlantIntrfcNew';


function Shop() {
  const typeFromHomePage = useParams().type || "all";

  const { data }: { data: any } = useFetchDataFromServer();
  
  const [type, setType] = useState(typeFromHomePage);

  return (
    <div>
      <div id="headerDiv">
        <h1>Our Shop</h1>
      </div>

      <SearchByType changeType={setType} ></SearchByType>

      {<div className='productDiv'>
        {data && data.map((curr: PlantIntrfcNew) => {
          // console.log(curr.id);
          
          return (type === 'all' || curr.typeName.toLowerCase() === type.toLowerCase()) &&
            <PlantCard
              plant={curr} key={curr.id}
            ></PlantCard>
        })}
      </div>}
    </div>
  )
}

export default Shop


