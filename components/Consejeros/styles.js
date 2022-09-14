import { Box, Flex } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Box)`
  background-color: #f7f7f7;
  width: 100%;
`;

const ContenedorSecundario = styled(Flex)`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 50px;  
`;

const ContendorTitulo = styled(Box)`
  flex: 1 1 100%;
  text-align: center;
  margin-top: 20px;
`;

const ContenedorDescripcion = styled(Flex)`
  padding: 0 25px;
  margin-bottom: 20px;
`;

const Descripcion = styled.p`
  line-height: normal;
  margin: 0 0 17px;
  font-size: 15px;
`;

const ContenedorConsejeros = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export {
  ContenedorPrincipal,
  ContenedorSecundario,
  ContendorTitulo,
  ContenedorDescripcion,
  Descripcion,
  ContenedorConsejeros
}