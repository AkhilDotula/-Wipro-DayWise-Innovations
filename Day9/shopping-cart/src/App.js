import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart using Context API</h1>
     <ProductList/>
     <Cart/>
    </div>
  );
}

export default App;
