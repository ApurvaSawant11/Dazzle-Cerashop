import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home, Products, ProductPage, Login, Signup, Profile, Wishlist, Cart } from "./pages"
import { Header, Footer } from "./components";

import Mockman from "mockman-js";

const App = () => {
  return (
   <>
   <Header />
   <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={ <Products /> } />
      <Route path="/:productId" element={<ProductPage />} />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/wishlist" element={ <Wishlist />} />
      <Route path="/cart" element={  <Cart /> } />
      <Route path="/mockman" element={<Mockman />} />
   </Routes>
   <Footer />
     
   </>
   );
}

export default App;
