import React from 'react';
import { database } from '../../store/database.js';
import Box from '../molecules/Box.jsx';
import { Container, Image, ImageContainer, ImagesContainer, InfoText, InitialText, TextIni } from './Syled.jsx';

function Informacion() {
  const juegoZelda = database.informacion[0];
  const juegoStar =database.informacion[1];
  const juegoHogwarts= database.informacion[2];

  return (
    <Container>
      <TextIni>Información sobre los juegos más populares del 2023</TextIni>
      <ImagesContainer>
        <ImageContainer>
          <Image src="zelda.jpg" alt="Imagen 1" />
          <InitialText>Informacion</InitialText>
          <Box>
          <InfoText>
            <p>Nombre:{juegoZelda.nombre}</p>
            <p>Fecha de lanzamiento: {juegoZelda.fechaLanzamiento}</p>
            <p>Desarrollo: {juegoZelda.desarrollo}</p>
            <p>Disponible en: {juegoZelda.disponibleEn}</p>
            <p>Descripción: {juegoZelda.descripcion}</p>
          </InfoText>
          </Box>
        </ImageContainer>
        <ImageContainer>
          <Image src="starwars.jpeg" alt="Imagen 2" />
          <InitialText>Informacion</InitialText>
          <Box>
          <InfoText>
            <p>Nombre:{juegoStar.nombre}</p>
            <p>Fecha de lanzamiento: {juegoStar.fechaLanzamiento}</p>
            <p>Desarrollo: {juegoStar.desarrollo}</p>
            <p>Disponible en: {juegoStar.disponibleEn}</p>
            <p>Descripción: {juegoStar.descripcion}</p>
          </InfoText>
          </Box>
        </ImageContainer>
        <ImageContainer>
          <Image src="Hogwarts.webp" alt="Imagen 3" />
          <InitialText>Informacion</InitialText> <Box>
          <InfoText>
            <p>Nombre:{juegoHogwarts.nombre}</p>
            <p>Fecha de lanzamiento: {juegoHogwarts.fechaLanzamiento}</p>
            <p>Desarrollo: {juegoHogwarts.desarrollo}</p>
            <p>Disponible en: {juegoHogwarts.disponibleEn}</p>
            <p>Descripción: {juegoHogwarts.descripcion}</p>
          </InfoText>
          </Box>
        </ImageContainer>
      </ImagesContainer>
    </Container>
  );
}

export default Informacion;
