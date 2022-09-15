import { Box } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Box)`
  width: 100%;
  margin-bottom: 60px;
`;

const Encabezado = styled.h2`
  text-align: center;
  margin-top: calc(150px + 1%);
  font-weight: bolder;
  color: #606060;
  font-size: 30px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
    margin-top: 100px;
  }
`;

const Texto = styled.p`
  max-width: 700px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  font-size: 18px;
  padding: 0 25px;
`;

export {
  ContenedorPrincipal,
  Encabezado,
  Texto
}