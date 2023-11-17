import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart, decreaseQuantity, increaseQuantity }) => {

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => {
      const subtotal = product.price * product.quantity;
      return total + subtotal;
    }, 0);
  };
 
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>¡Tu carrito está vacío! Agrega productos para comenzar tus compras.</p>
      ) : (
        <div>
        <ul className="cart-items">
          {cartItems.map((product, index) => (
            <li key={index} className="cart-item">
              <div>
                <img src={product.image} alt={product.name} style={{ marginRight: '10px', maxWidth: '50px' }}/>
                <span>{product.name}</span>
              </div>
              <div>
                <button className="quantity-button" onClick={() => decreaseQuantity(product.id)}>
                  -
                </button>
                <button className="quantity-button" onClick={() => increaseQuantity(product.id)}>
                  +
                </button>
                <span className="cart-item-quantity">{product.quantity} x ${product.price.toFixed(2)} = ${(product.price * product.quantity).toFixed(2)}</span>
                <button className="delete-button" onClick={() => removeFromCart(product.id)}>
                  Eliminar del carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
          <div className="total-container">
            <div className="cart-total">
              <strong>Total:</strong> ${calculateTotal().toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;