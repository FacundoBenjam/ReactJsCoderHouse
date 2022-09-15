import { CartContext } from '../../context/CartContext';
import { useContext, useState } from "react";
import Counter from '../Counter.js/Counter';
import Select from '../Select/Select';
import { Link } from 'react-router-dom';



const ItemDetail = ({item}) => {

const { cart, addToCart, isInCart } = useContext(CartContext)
console.log(cart)

 const [cantidad, setCantidad] = useState(1)  



 const handleAgregar = () => {
  const itemToCart = {
    id: item.id,
    price: item.price,
    title: item.title,
    stock: item.stock,
    cantidad
  }
     console.log(isInCart(item.id))
     addToCart(itemToCart)
  }
  

  return (
    <div className='container my-5' >
        <img src={item.pictureUrl}/>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>{item.category}</p>
        <h4>{item.price}</h4>
        <hr/>
            
            {isInCart(item.id) && <p>el item ya a sido agregado</p>}
        {
          isInCart(item.id)
          ? <Link to="/cart" className='btn btn-success my-2'>Terminar la compra</Link>
          :
             <Counter 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
          />
        }

        

  </div>
  )
}

export default ItemDetail;