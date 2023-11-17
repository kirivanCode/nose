// Ivan Dario Sierra Vega
// Oscar Felipe Segovia Alvarado
// Carlos Mauricio Rios Velasquez

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // El producto ya está en el carrito, aumentar la cantidad
      increaseQuantity(product.id);
    } else {
      // El producto no está en el carrito, agregarlo con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar cartItemCount={cartItems.length} />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route
            path="/ProductList"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />

          <Route path="/SearchBar" element={<SearchBar />} />

         

          
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
              />
            }
          />
        </Routes>

        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
