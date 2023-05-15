import { useState, useEffect } from 'react';
import { PlantIntrfc } from '../intrfc/PlantIntrfc';


export const useFetchData = () => {
  const [data, setData] = useState<PlantIntrfc[]>([]);
//https://mocki.io/v1/3cfd5518-0129-4542-ba6d-e495eedba161
  useEffect(() => {
    fetch("https://mocki.io/v1/8328dd7a-7c64-4dc2-b56b-18db7f257cc3")
      .then(dataStr => { return dataStr.json() })
      .then(dataObj => {
        setData(dataObj.plants);
      })
  }, [])

  return { data }
};
