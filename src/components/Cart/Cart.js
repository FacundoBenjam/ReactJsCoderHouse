import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = () => {

const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

if(cart.length === 0) {
  return (
         <div className='container my-5'>
        <h2>Tu carrito esta vacio</h2>
        <hr/>
        <Link to="/" className='btn btn-primary'>Ir a comprar</Link>
        </div>
    )
} 

  return(
    <div className='container my-5'>
        <h1>mi carrito</h1>
          <hr />

          { cart.map((item) => (
              <div key={item.id}>
               <h3>{item.title}</h3>
               <p>Precio: {item.price}</p>
               <p>Cantidad: {item.cantidad}</p>
               <button onClick={() => removeItem(item.id)} className='btn btn-danger mx-2'><BsFillTrashFill/></button>
               <hr/>
              </div>
          ))}

          <h4>Total ${cartTotal()}</h4>
          <button onClick={emptyCart} className='btn btn-danger' >Vaciar carrito</button>
          <Link className="btn btn-success mx-3" to="/Checkout">Terminar mi compra</Link>
    </div>
  )
}


export default Cart;