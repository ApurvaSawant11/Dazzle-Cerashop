import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home, Products, Login, Signup, Profile } from "./pages"
import { Header, Footer } from "./components";

import Mockman from "mockman-js";

const App = () => {
  return (
   <>
   <Header />
   <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/products" element={ <Products /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/mockman" element={<Mockman />} />
   </Routes>
   <Footer />
     
   </>
   );
}

export default App;
