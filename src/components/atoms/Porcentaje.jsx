import React from 'react';
import { VictoryLabel, VictoryPie, VictoryTooltip } from 'victory';
import { database2, database4 } from '../../store/database';
import Box from '../molecules/Box';
import { ChartTitle, Container2, PieChartContainer, TextContainer } from './Syled.jsx';
const PieChartComponent = () => {
  const data = database2.data;
  const colorScale = [
    'rgb(255, 99, 133)',
    'rgb(54, 163, 235)',
    'rgb(255, 207, 86)',
    'rgb(129, 199, 132)',
    'rgb(153, 102, 255)',
    'rgb(255, 99, 71)',
    'rgb(255, 165, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 128, 0)',
    'rgb(0, 0, 128)',
    'rgb(128, 0, 128)',
    'rgb(0, 128, 128)'
  ];

  return (
    <Container2>
      <ChartTitle>Géneros de videojuegos más jugados en México en 2023</ChartTitle>
      <PieChartContainer>
        <VictoryPie
          data={data}
          x="especialidad"
          y="citas"
          labelComponent={
            <VictoryTooltip
              cornerRadius={3}
              pointerLength={8}
              style={{ fontSize: 20 }}
            />
          }
          style={{ labels: { fill: 'white', fontSize: 8 } }}
          width={450}
          height={350}
          colorScale={colorScale} // Asignar el colorScale personalizado
          labels={({ datum }) => `${datum.especialidad}\n${datum.citas}`}
        />
        {data.map((datum, index) => (
          <VictoryLabel
            key={index}
            textAnchor="middle"
            verticalAnchor="middle"
            x={150}
            y={100}
            style={{ fontSize: 12, fill: 'black' }}
          />
        ))}
      </PieChartContainer>
      <Box>
      <TextContainer>
        {database4.texto.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </TextContainer>
      </Box>
    </Container2>
  );
};
export default PieChartComponent;