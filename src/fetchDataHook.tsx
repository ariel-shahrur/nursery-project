import { useState, useEffect } from 'react';
import { PlantIntrfc } from './PlantIntrfc';

interface FetchResult {
  data: PlantIntrfc[];
  isLoading: boolean;
  error: string | null;
}

export const useFetchData = () => {
    const [data, setData] = useState(null);
    const url = 'https://mocki.io/v1/4f7f44b4-0d2b-412a-8ee4-947dc5cfa250'
    
    useEffect(()=>{
        console.log('i am about to fetch')
        fetch("https://mocki.io/v1/4f7f44b4-0d2b-412a-8ee4-947dc5cfa250")
      .then(dataStr=>{return dataStr.json()})
      .then(dataObj=>{
      setData(dataObj.plants);})
    }, [])

    return {data}
};
