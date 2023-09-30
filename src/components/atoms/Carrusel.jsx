import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { CarruselContainer, CarruselItem, CarruselTitle } from './Syled';

class Carrusel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    return (
      <CarruselContainer
        containerWidth={this.props.containerWidth}
        containerHeight={this.props.containerHeight}
      >
        <CarruselTitle>"Game On: Tu Destino para Noticias y Reseñas de Videojuegos"</CarruselTitle>
        <Slider {...settings}>
          <CarruselItem itemWidth={this.props.itemWidth}>
            <img src="lol.png" alt="Imagen 1" />
          </CarruselItem>
          <CarruselItem itemWidth={this.props.itemWidth}>
            <img src="craft.webp" alt="Imagen 2" />
          </CarruselItem>
          <CarruselItem itemWidth={this.props.itemWidth}>
            <img src="zelda.jpg" alt="Imagen 3" />
          </CarruselItem>
          <CarruselItem itemWidth={this.props.itemWidth}>
            <img src="resident.jpg" alt="Imagen 4" />
          </CarruselItem>
          <CarruselItem itemWidth={this.props.itemWidth}>
            <img src="Hogwarts.jpeg" alt="Imagen 5" />
          </CarruselItem>
        </Slider>
       
      </CarruselContainer>
    );
  }
}

export default Carrusel;
