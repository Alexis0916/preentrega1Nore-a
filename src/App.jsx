import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Cart from "./components/Cart/Cart"; 
import { CarritoProvider } from "./context/CarritoContext";
import FormPay from "./components/FormPay/FormPay";


function App() {



  const [countProducts, setCountProducts] = useState(0);

  const onAdd = (cantidad) => {
    setCountProducts(countProducts + cantidad);
  }


  return (
  <CarritoProvider>
      <div>
        <h1 className="app-title">EXA Pinturas</h1>
        <BrowserRouter>
          <Navbar countProducts={countProducts} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/pagar" element={<FormPay />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer onAdd={onAdd} />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>

      </div>
    </CarritoProvider>
    
  )
} 
export default App;
