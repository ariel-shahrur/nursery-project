import { useState, useEffect } from 'react';
import { CartItemIntrfc } from '../intrfc/CartItemIntrfc';
import Cookies from 'js-cookie';

export const useFetchDataFromServer = () => {
  const [data, setData] = useState<CartItemIntrfc[]>([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3005/")
      .then(dataStr => { return dataStr.json() })
      .then(dataObj => {
        setData(dataObj.recordsets[0]);
        // console.log("data from hook",data);
      })
  }, [])

  return { data }
};



export const useFetchCartItemData = () => {
  const bearerToken = Cookies.get('token');
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  }
};
  const [data, setData] = useState<CartItemIntrfc[]>([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3005/cart/",fetchOptions)
      .then(dataStr => { return dataStr.json() })
      .then(dataObj => {
        setData(dataObj);
      })
  }, [])
  return { data }
};

