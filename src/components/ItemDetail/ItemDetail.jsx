import ItemDetail from './ItemDetail.css'

const ItemDatail = ({id, name, price, img}) => {
  return (
    <div className='contenedorItem'>
      <h2>
        Nombre: {name}
      </h2>
      <h3>
        Precio: {price}
      </h3>
        <h3>
        ID: {id}
        </h3>

        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        </p>
      <img className='imgDetail' src={`./../imgpublic/${img}`} alt={name} />



    </div>
  )
}

export default ItemDatail