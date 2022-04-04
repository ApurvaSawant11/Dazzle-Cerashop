import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home, Products, ProductPage, Login, Signup, Profile, Wishlist, Cart } from "./pages"
import { Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Mockman from "mockman-js";

const App = () => {
  return (
   <>
   <Header />
   <ToastContainer
          position="top-right"
          autoClose="2500"
          limit="2"
          style={{ top: "6.5em", right: "1em" }}
          icon={false}
        />
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
