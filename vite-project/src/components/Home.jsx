import React from 'react';
import Slider from 'react-slick';
import panBono from '../images/panBono.jpg';
import Alfajor from '../images/Alfajor.jpg';
import tortaChocolate from '../images/tortaChocolate.jpg';
import baguette from '../images/baguette.jpg';
import etiquetaDePrecio from '../icons/etiquetaDePrecio.ico';
import destacados from '../icons/destacados.ico';
import '../styles/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const images = [panBono, Alfajor, tortaChocolate];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, //cantidad de imagenes en el slide
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000, //tiempo en milisegundos 
  };
  return (
    <div className="home-container">

<section className="welcome-section">
        <h2>Bienvenido a nuestra panadería</h2>
        <p> la mejor panaderia del pais, donde no se roba como en el gobierno de Petro </p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slick-slide">
              <img className='slider-img' src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <p className='welcome-text'>Descubre una amplia variedad de productos horneados frescos con amor y cuidado.</p>
      </section>

      <section className="special-offers-section">
      <div className="offer-header">
        <h2 className='offer-h2'>Ofertas Especiales</h2>
        <img className="icons" src={etiquetaDePrecio} alt="Etiqueta Precio" /> 
      </div>
        <p>No te pierdas nuestras ofertas especiales de esta semana. ¡Aprovecha y disfruta de deliciosos panes y pasteles!</p>
      </section>

      <section className="featured-products-section">
      <div className='featured-product-header'>
      <div className="featured-header">
          <h2 className='featured-h2'>Productos Destacados</h2>
          <img className="icons" src={destacados} alt="destacados" /> 
        </div>
      </div>
        <div className="product-card">
          <h3>Alfajor</h3>
          <img className='img' src={Alfajor} alt="Alfajor" />
          <p>Elaborado con granos enteros y semillas para un sabor nutritivo.</p>
        </div>
        <div className="product-card">
          <h3>Pastel de Chocolate</h3>
          <img className='img' src={tortaChocolate} alt="Pastel de Chocolate" />
          <p>Un clásico irresistible que te hará volver por más.</p>
        </div>
        <div className="product-card">
          <h3>Baguette</h3>
          <img className='img' src={baguette} alt="Baguette" />
          <p>pan crujiente y loco.</p>
        </div>
        <div className="product-card">
          <h3>Pan de Bono</h3>
          <img className='img' src={panBono} alt="Pan Bono" />
          <p>el mejor pan del mundo.</p>
        </div>
      </section>

      <section className="customer-testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial">
          <p>"¡La panadería tiene los productos más frescos que he probado! ¡Siempre estoy emocionado de venir aquí!"</p>
          <p>- Cliente Feliz</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
