import Item from "../Item/Item.jsx"


const itemList = ({products}) => {
  return (
    <div className="ContenedorProductos">
        {products.map(prod => <Item key={prod.id} {...prod}/> )} 

    </div>
  )
}

export default itemList