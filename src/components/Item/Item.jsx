import React from 'react'

const Item = ({id, name, price, img,}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={name} />
        <h3>Nombre:{name}</h3>
        <p>Precio:{price}</p>
        <p>ID: {id}</p>
        <button className='btnProducto' > Ver Detalles </button>
    </div>
  )
}

export default Item