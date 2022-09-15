import { Box, Flex } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Box)`
  position: relative;
  width: 100%;
  height: 600px;

    img {
      width: 100%;
      height: 600px;
      opacity: 0.5;
      filter: contrast(0.7);
    }
`;

const ContenedorSecundario = styled(Box)`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`;

const Encabezado = styled.h2`
  text-align: center;
  margin: 70px 0;
  font-weight: bolder;
  color: #606060;
  font-size: 30px;

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
    margin: 25px 0;
  }
`;

const ContenedorCirculos = styled(Flex)`
  list-style: none;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  justify-content: space-evenly;
  align-items: start;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const CirculoRojo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: #e02e21;
  color: white;
  overflow: hidden;
  position: relative;
  padding-top: 10px;

  @media only screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const NumeracionCirculos = styled.h1`
  color: white;
  font-weight: bolder;
  font-size: 3rem;
  line-height: 1.1;
  margin-top: 15px;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    padding: 0;
  }
`;

const TextoCiruclos = styled.p`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 63%;
  left: 50%;
  text-align: center;
  line-height: 20px;
  width: 90%;
  margin: 0 0 17px;
  font-size: 15px;
  color: white;

  @media only screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;
export {
  ContenedorPrincipal,
  ContenedorSecundario,
  Encabezado,
  ContenedorCirculos,
  CirculoRojo,
  NumeracionCirculos,
  TextoCiruclos,
}
