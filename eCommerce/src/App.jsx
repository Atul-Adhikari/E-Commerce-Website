import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import axios from "axios";

export const MyContext = createContext();
function App() {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setProducts(response.data)
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const [carts, setCarts]=useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <MyContext.Provider value={{products, setProducts, carts, setCarts}}>
          <Routes>
            <Route element={<Shop />} path="/" />
            <Route element={<Cart />} path="/cart" />
          </Routes>
        </MyContext.Provider>
      </Router>
    </>
  );
}

export default App;
