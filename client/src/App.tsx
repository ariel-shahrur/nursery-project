import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import HomePage from './HomePage';
import Cart from './Cart';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Shop from './Shop';
import ClickedGalleryImg from './ClickedGalleryImg';
import { navItem } from './dataContext/ItemsArr'
import Login from './Login';
import { useState } from 'react';
import Cookies from 'js-cookie';


function App() {

  const [isConncted,setIsConncted]=useState(!!Cookies.get('token'));

  return (

    <div className="App">
      <Nav navItems={navItem} isConncted={isConncted} ></Nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop  />} />
        <Route path="/shop/:type" element={<Shop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:plantName" element={<ClickedGalleryImg />} />
        {/* <Route path="/wishList" element={<WishList wishList={wishList} addToCart={addToCart} removeFromWishList={removeFromWishList} />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login"  element={<Login isConnected={isConncted} setIsConncted={setIsConncted} />} />
        <Route path="/cart" element={<Cart  />} />
      </Routes>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
