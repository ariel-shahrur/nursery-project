import Cookies from "js-cookie";

let bearerToken = Cookies.get('token');
export const handlerForMakeOrder=()=>{
  bearerToken = Cookies.get('token');
  fetch('http://localhost:3005/cart/makeOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${bearerToken}`
    },
  })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
} 

export const handlerForAddToCart=(plantId:number)=>{
  bearerToken = Cookies.get('token');
  fetch('http://localhost:3005/cart/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${bearerToken}`
    },
    body: JSON.stringify({plantId}),
  })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
} 

export const handlerForRemoveFromCart=(plantId:number)=>{
  fetch('http://localhost:3005/cart/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${bearerToken}`
    },
    body: JSON.stringify({plantId}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data from remove from cart", data);
      
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
} 