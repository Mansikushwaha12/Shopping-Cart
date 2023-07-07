import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card } from 'react-bootstrap';
import Item from './components/Item';
import Cart from './components/Cart';
import Home from './components/Home';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
