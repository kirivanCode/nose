// ProductDetails.jsx
import React from 'react';
import '../styles/ProductDetails.css';

const ProductDetails = ({ product, addToCart, closeDetails }) => {
    return (
      <div className="product-details">
        <div className="header">
          <span>{product.name}</span>
        </div>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {product.ingredients && (
          <div>
            <strong>Ingredientes:</strong> {product.ingredients} {/*falta agregar esto en el prodcutList*/}
          </div>
        )}
        <h3>Precio: ${product.price.toFixed(2)}</h3>
        <button onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
        <button onClick={closeDetails}>
          Cerrar
        </button>
      </div>
    );
  };
  
  export default ProductDetails;
  
