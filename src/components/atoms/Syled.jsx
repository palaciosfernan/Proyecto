import styled from "styled-components";
const CarruselTitle = styled.h2`
  color: #ffffff;
  text-align: center;
  background-color: #11A8AB;
  height: 60px;
  border-radius: 3px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const CarruselContainer = styled.div`
  width: ${props => props.containerWidth || '100%'};
  height: ${props => props.containerHeight || '200px'};
  position: relative;
  width: auto;
  height: auto;
`;
const CarruselItem = styled.div`
  img {
    width: 400px;
    height: 300px;
    margin-right: 0;
    z-index: 1;
    background-color: red;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

`;
const ImagesContainer = styled.div`
  display: block;
  justify-content: center;
  margin-bottom: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;

`;

const Image = styled.img`
  width: 300px;
  margin-bottom: 5px;
  
`;

const InitialText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  background-color: #4CE669;
  width: 160px;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  margin-bottom: 5px; 
`;
const TextIni=styled.div `
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #11A8AB;
  width: 500px;
  height: 60px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoText = styled.div`
  display: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  text-align: justify;
  margin-top: 10px;

  ${ImageContainer}:hover & {
    display: block;
  }
`;
const HoverText = styled.div`
  color: rgba(255, 9, 9, 0.8);
  font-size: 16px;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const ChartTitle = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #11A8AB;
  width: 500px;
  height: 60px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PieChartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 200px;
  margin-right: auto;
`;
const StyledHome = styled.div`
    display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1f253d;
`;
const TextContainer = styled.div`
color: antiquewhite;
`;


 export { CarruselContainer, CarruselItem, CarruselTitle, ChartTitle, Container, Container2, HoverText, Image, ImageContainer, ImagesContainer, InfoText, InitialText, PieChartContainer, StyledHome, TextContainer, TextIni };

