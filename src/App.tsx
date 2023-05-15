import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import HomePage from './HomePage';
import Cart from './Cart';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Shop from './Shop';
import WishList from './WishList';
import { useState } from 'react';
import { PlantIntrfc } from './PlantIntrfc';
import { PlantCardCartItemIntrfc } from './PlantCardCartItemIntrfc';
import ClickedGalleryImg from './ClickedGalleryImg';
import PlantCardCartItem from './PlantCardCartItem';
interface CartItemCounter {
  [key: string]: number;
}

function App() {

  const [cart, setCart] = useState<PlantIntrfc[]>([]);
  const [wishList, setWishList] = useState<PlantIntrfc[]>([]);
  const [cartSum, setCartSum] = useState(0);
  const [cartItemCounter, setCartItemCounter] = useState<CartItemCounter>({});

  const addToCart = (plant: PlantIntrfc) => {
    setCartItemCounter({...cartItemCounter,[plant.name]:(cartItemCounter[plant.name] || 0) + 1});
    console.log(cartItemCounter[plant.name]>1);
    
    if(cartItemCounter[plant.name]>=1){
      return;
    }
    const newCart = [...cart, plant];
    setCart(newCart);
    setCartSum(cartSum+plant.price);
  }

  const addToWishList = (plant: PlantIntrfc) => {
    const newWishList = [...wishList, plant];
    setWishList(newWishList);
  }

  const removeFromCart = (indexToRemove:number,price:number,plantName:string)=>{
    setCartItemCounter({...cartItemCounter,[plantName]:(cartItemCounter[plantName] || 0) -1});
    // console.log(cartItemCounter);
    if(cartItemCounter[plantName]>1){
      return;
    }
    const newCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
    setCart(newCart);
    setCartSum(cartSum-price);
    
  }

  const removeFromWishList = (indexToRemove:number)=>{
    const newWishList = [...wishList.slice(0, indexToRemove), ...wishList.slice(indexToRemove + 1)];
    setWishList(newWishList);
  }
  
  return (

    <div className="App">
      <Nav></Nav>
      <hr />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop addToCart={addToCart} addToWishList={addToWishList} />} />
      <Route path="/shop/:type" element={<Shop addToCart={addToCart} addToWishList={addToWishList} />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:plantName" element={<ClickedGalleryImg  addToCart={addToCart} addToWishList={addToWishList} />} />
      <Route path="/wishList" element={<WishList wishList={wishList} addToCart={addToCart} removeFromWishList={removeFromWishList} />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} cartSum={cartSum} cartItemCounter={cartItemCounter}/>} />
      </Routes>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
