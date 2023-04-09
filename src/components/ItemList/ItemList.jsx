import Item from "../Item/Item.jsx"
import "./ItemList.css"


const itemList = ({products}) => {


  return (
    <div className="ContenedorProductos">
        {products.map(prod => <Item key={prod.id} producto={prod}/> )} 
    </div>
  )
}

export default itemList