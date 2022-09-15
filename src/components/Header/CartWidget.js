import React, { useContext } from "react";
import image from "./cart.jpg";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

const { cartQuantity } = useContext(CartContext)
return (
  <Link to='/cart'>
   <><span>{cartQuantity()}</span><img width={40} src={image} /></>
  </Link>
)

}

export default CartWidget;