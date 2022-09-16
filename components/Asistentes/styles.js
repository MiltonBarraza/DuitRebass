import { Flex } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Flex)`
  background-color: #f4f4f4;
  height: 350px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const ContenedorTexto = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const Imagen = styled(Flex)`
  width:300px;
  height:150px;
  margin-top: -30px;
  position: relative;
`;

const Texto = styled.h3`
  color: #606060;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const ContenedorTarjetasAsistentes =styled(Flex)`

@media only screen and (max-width: 1024px) {
  margin-top: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
`;

export {
  ContenedorPrincipal,
  ContenedorTexto,
  Texto,
  Imagen,
  ContenedorTarjetasAsistentes,
}