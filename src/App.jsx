import { Routes, Route, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductListing from './pages/ProductListing/ProductListing';
import MockAPI from './pages/MockMan';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import WishList from './pages/WishList/WishList';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='py-5 min-vh-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          {!localStorage.getItem('token') ? (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </>
          ) : (
            () => {
              navigate('/');
            }
          )}
          <Route path='/products' element={<ProductListing />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:productId' element={<SingleProduct />} />
          <Route path='/mockman' element={<MockAPI />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
