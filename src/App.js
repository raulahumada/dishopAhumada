/*Internal Imports*/
import './App.css';

/*External Imports */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Components*/
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:id" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
