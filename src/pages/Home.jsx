import Carrusel from "../components/atoms/Carrusel";
import Informacion from "../components/atoms/Informacion";
import Inicio from "../components/atoms/Inicio";
import Porcentaje from '../components/atoms/Porcentaje';
import { StyledHome } from '../components/atoms/Syled';
import Box from "../components/molecules/Box";
function Home(){
    return(
        <>
          <StyledHome>
      <Carrusel />
      <Box>
      <Inicio></Inicio>
      </Box>
      <br />
      <br />
     <Informacion></Informacion>
        <Porcentaje></Porcentaje>
        </StyledHome>
        </>
    )
}
export default Home;