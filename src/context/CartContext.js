import { createContext, useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2'





export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState(init)

  const addToCart = (item) => {
    setCart([...cart, item])

  }

  const increaseQuantityInCart = (id) => {
    
  }

  const removeItem = (id) => {
    setCart( cart.filter((Item) => Item.id !== id) )
  }

   const isInCart = (id) => {
    return cart.some((item) => item.id === id)
   }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  } 

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)
  }

  const emptyCart = () => {
    setCart([])
  }

  const terminarCompraConSwal = (id) => {
    Swal.fire({
      title: 'Compra exitosa!',
      text: `Tu número de orden es: ${id}`,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Genial!'
    })
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])

  return (
      <CartContext.Provider value={ {
  cart,
  addToCart,
  isInCart,
  cartQuantity,
  cartTotal,
  emptyCart,
  removeItem,
  terminarCompraConSwal
 }}>
       {children}
       </CartContext.Provider>

  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}