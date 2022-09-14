import { Flex, Box } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Box)`
  margin-top: -80px;
  height: 90vh;
  position: relative;
`;

const ImagenFondo = styled(Box)`
  height: 100%;
  width: 100%;
  filter: brightness(0.8);
  z-index: -1;
  
`;

const ContenedorSecundario = styled(Flex)`
  position: absolute;
  top: 13vh;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
`;

const Logo = styled(Box)`
  height: 200px;
  margin-top: 20px;
`;

const Texto = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 600px;
  margin-top: 50px;
  letter-spacing: 1px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    width: auto;
    padding: 15px;
    font-size: 20px;
    margin: 25px;
  }
  `;

const ImagenComprar = styled(Box)`
  position: absolute;
  left: 50%;
  height: 40%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  @media only screen and (max-width: 1024px) {
    height: 187px;
    width: 182px;
    bottom: 0px;
  }
  `;

  export {
    ContenedorPrincipal,
    ImagenFondo,
    ContenedorSecundario,
    Titulo,
    Logo,
    Texto,
    ImagenComprar,
  }