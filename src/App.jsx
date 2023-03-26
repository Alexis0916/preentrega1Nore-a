import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  /* todo el coedigo js antes del retuturn */
  return (
    /* aca va el codigo jsx */
    <div className="App">
      <h1 className="">EXA Pinturas</h1>
      <Navbar /> 
      <ItemListContainer greeting="Bienvenido a EXA Pinturas" />
    </div>
  )
}
 
export default App;
