import React, { useState } from 'react';
import ProductDetails from './ProductDetails'; // Asegúrate de que la ruta sea correcta
import panBueno from '../images/panBueno.jpg';
import baguette from '../images/baguette.jpg';
import tortaChocolate from '../images/tortaChocolate.jpg';
import panBono from '../images/panBono.jpg';
import alfajor from '../images/Alfajor.jpg';
import galletaMantequilla from '../images/galletaMantequilla.jpg';
import '../styles/ProductList.css';
import '../styles/ProductDetails.css';

const ProductList = ({ addToCart }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };


  // Datos simulados de productos
  const products = [
    { id: 1, name: 'Pan el bueno', price: 3500, description: 'pan bien bueno', image: panBueno, ingredients: 'los ingredientes fundamentales que incluyen harina, agua, levadura, sal y azúcar. La harina, preferiblemente de trigo, sirve como la base principal, mientras que el agua se mezcla con la harina para formar la masa. La levadura, ya sea fresca o seca, desempeña un papel crucial en la fermentación, haciendo que la masa suba y resulte en un pan esponjoso. La sal regula el proceso de fermentación y añade sabor, mientras que el azúcar puede acelerar la acción de la levadura y mejorar el gusto del pan. Aunque estos son los elementos esenciales, la receta puede personalizarse con ingredientes adicionales como aceite, leche, huevos, semillas o frutos secos según la preferencia y el tipo de pan deseado.'},
    { id: 2, name: 'Torta de chocolate', price: 7500.0, description: 'torta de chocolate de la buena', image: tortaChocolate },
    { id: 3, name: 'Baguette', price: 30000.0, description: 'pan crujiente y loco', image: baguette },
    { id: 4, name: 'Pan de bono', price: 36700.5, description: 'el mejor pan del mundo', image: panBono },
    { id: 5, name: 'Alfajor', price: 2700.0, description: 'deliciosa galleta de papita pal loro', image: alfajor },
    { id: 6, name: 'galleta de mantequilla', price: 4500.0, description: 'galleta de mantequilla con chips de chocolate', image: galletaMantequilla },
  ];

  return (
    <div className='product-container'>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-card">
            <img className="product-img" src={product.image} alt={product.name} onClick={() => openDetails(product)} />
              <div className="card-body">
                <p>{product.description}</p>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      {selectedProduct && (
        <div className="overlay" onClick={closeDetails}>
          <ProductDetails
            product={selectedProduct}
            addToCart={addToCart}
            closeDetails={closeDetails}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;

