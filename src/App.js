
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemContainerList from './components/ItemListContainer/ItemContainerList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


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

    </Routes>

  </BrowserRouter>

  </CartProvider>   
 

  </>;

}

export default App;
