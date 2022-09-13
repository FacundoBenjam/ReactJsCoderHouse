
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemContainerList from './components/ItemListContainer/ItemContainerList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import { useState } from "react"


function App() {

  const [cart, setCart] = useState([])


  return <>
 <CartContext.Provider value={ {
  cart,
  setCart
 } }>
  
 <BrowserRouter>

    <NavBar />

    <Routes>
      <Route path='/' element={ <ItemContainerList /> } />
      <Route path='/productos/:categoryId' element={ <ItemContainerList /> } />
      <Route path='/item/:itemId' element={<ItemDetailContainer />} />
    </Routes>

  </BrowserRouter>

  </CartContext.Provider>   
 

  </>;

}

export default App;
