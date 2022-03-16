import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home } from "../src/pages"
import { Footer } from "./components";

import Mockman from "mockman-js";

export default function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/mockman" element={<Mockman />} />
   </Routes>
   <Footer />
     
   </>
   );
  }