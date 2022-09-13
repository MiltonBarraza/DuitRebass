import { Box, Flex } from "rebass";
import styled from "styled-components"

const ContenedorPrincipal = styled(Flex)`
  background-color: #e02e21;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: space-evenly;
  
  @media only screen and (min-width: 1024px) {
    display: flex;
    max-width: 1300px;
    margin: 25px auto;
    border-radius: 5px;
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 100px;
  }
`;

const ContenedorLogos = styled(Flex)`
  flex-direction: row;
  height: auto;
  width: 100%;
  padding: 10px;
  max-width: 750px;

  >div {
    flex: 0 0 50%;
    align-items: center;
    justify-content: space-around;
  }
`;

const ContenedorTexto = styled(Flex)`
  border-radius: 10px;
  max-width: 1000px;
  padding-bottom: 20px;
  align-self: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  
  @media only screen and (min-width: 1024px) {
    padding-bottom: 0px;
  }
`;

const Texto = styled(Box)`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #f3eed5;
  text-align: justify;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 25px
  }
`;

const ContenedorDatos = styled(Flex)`
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  max-width: 750px;
  
  >* {
    width: fit-content;
    line-height: normal;
    color: #f3eed5;
    font-size: 12px;
    margin: 5px;
  }
`;

const Datos = styled.p`
  width: fit-content;
  line-height: normal;
  color: #f3eed5;
  font-size: 12px;
  margin: 5px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

const Telefono = styled.a`
  &:hover {
  text-decoration: none;
  color: #333;
  outline: none!important;
  transition: color .2s;
  background-color: transparent;
  }
`;

const LogoDuit = styled(Flex)`
  max-height: 55px;
  width: auto;
  max-width: 100%;
  vertical-align: middle;
`;

const LogoByHa = styled(Flex)`
  margin-top: 8px;
`;

export {
  ContenedorPrincipal,
  ContenedorLogos,
  ContenedorTexto,
  Texto,
  ContenedorDatos,
  Datos,
  Telefono,
  LogoDuit,
  LogoByHa,
}