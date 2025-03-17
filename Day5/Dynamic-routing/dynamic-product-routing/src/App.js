import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
function App() {
  return(
    <Router> 
      <nav>
        <Link to="/">Home</Link> | <Link to ="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/products" element={<Products />} />
        <Route path ="/products/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}
export default App;
