import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [countProducts, setCountProducts] = useState(0);

  const onAdd = (cantidad) => {
    setCountProducts(countProducts + cantidad);
  }


  return (

    <div>
      <h1 className="app-title">EXA Pinturas</h1>
      <BrowserRouter>
        <Navbar countProducts={countProducts} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer onAdd={onAdd} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </div>

    
  )
} 
export default App;
