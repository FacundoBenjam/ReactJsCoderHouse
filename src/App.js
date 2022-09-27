
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemContainerList from './components/ItemListContainer/ItemContainerList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {

  return <>
 <CartProvider>
  
 <BrowserRouter>

    <NavBar />

    <Routes>
      <Route path='/' element={ <ItemContainerList /> } />
      <Route path='/productos/:categoryId' element={ <ItemContainerList /> } />
      <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/Checkout' element={<Checkout />} />

    </Routes>

  </BrowserRouter>

  </CartProvider>   
 

  </>;

}

export default App;
