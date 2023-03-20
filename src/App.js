import './components/NavBar/style.css';
import './Pages/ItemListContainer/style.css';
import './components/Footer/style.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
      <header>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Welcome to KeyCo Store!"/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Welcome to KeyCo Store!"/>} />
              <Route path='*' element={<PageNotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </header>
  );
}

export default App;
