import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
