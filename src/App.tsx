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


function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
