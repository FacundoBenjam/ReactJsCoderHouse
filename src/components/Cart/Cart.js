import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

const { cart, cartTotal, emptyCart } = useContext(CartContext)

  return(
    <div className='container my-5'>
          <h1>mi carrito</h1>
          <hr />

          { cart.map((item) => (
              <div key={item.id}>
               <h3>{item.title}</h3>
               <p>Precio: {item.price}</p>
               <p>Cantidad: {item.cantidad}</p>
              </div>
          ))}

          <h4>Total ${cartTotal()}</h4>
          <button onClick={emptyCart} className='btn btn-danger' >Vaciar carrito</button>
    </div>
  )
}


export default Cart;