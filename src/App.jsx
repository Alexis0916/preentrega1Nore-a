import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

function App({children}) {
  /* todo el codigo js antes del retuturn */
  return (
    /* aca va el codigo jsx */
    <div className="App">
      <h1 className="">EXA Pinturas</h1>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
} 
export default App;
