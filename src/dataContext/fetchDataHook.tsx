import { useState, useEffect } from 'react';
import { PlantIntrfc } from '../intrfc/PlantIntrfc';


export const useFetchData = () => {
  const [data, setData] = useState<PlantIntrfc[]>([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/3cfd5518-0129-4542-ba6d-e495eedba161")
      .then(dataStr => { return dataStr.json() })
      .then(dataObj => {
        setData(dataObj.plants);
      })
  }, [])

  return { data }
};