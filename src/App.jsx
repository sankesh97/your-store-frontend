import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './App.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Authentication from './pages/Authentication/Authentication';
import ProductListing from './pages/ProductListing';
import MockAPI from './pages/MockMan';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='py-5 min-vh-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/:authMethod' element={<Authentication />} />
          <Route path='/products' element={<ProductListing />} />
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
