

const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h4> {item.name} </h4>
        <p> Precio: $ {item.price} </p>  
        <p> Cantidad: {cantidad} </p>
    </div>
  )
}

export default CartItem