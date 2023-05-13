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


function App() {

  const [cart, setCart] = useState<PlantIntrfc[]>([]);
  const [wishList, setWishList] = useState<PlantIntrfc[]>([]);

  const addToCart = (plant: PlantIntrfc) => {
    console.log('adding to cart the plant');
    console.log(plant);
    const newCart = [...cart, plant];
    setCart(newCart);
    console.log('new cart is')
    console.log(newCart);
  }

  const addToWishList = (plant: PlantIntrfc) => {
    console.log('adding to wishlist the plant');
    console.log(plant);
    const newWishList = [...wishList, plant];
    setWishList(newWishList);
    console.log('new wishlist is')
    console.log(newWishList);
  }

  const removeFromCart = (indexToRemove:number)=>{
    const newCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
    setCart(newCart);
  }
  
  return (

    <div className="App">
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop addToCart={addToCart} addToWishList={addToWishList} />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/wishList" element={<WishList wishList={wishList} />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
