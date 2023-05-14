import { useState, useEffect } from 'react';
import { PlantIntrfc } from './PlantIntrfc';

interface FetchResult {
  data: PlantIntrfc[];
  isLoading: boolean;
  error: string | null;
}

export const useFetchData = () => {
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        fetch("https://mocki.io/v1/c5aab276-8054-4b6a-9502-81efdc0e2091")
      .then(dataStr=>{return dataStr.json()})
      .then(dataObj=>{
      setData(dataObj.plants);})
    }, [])

    return {data}
};
