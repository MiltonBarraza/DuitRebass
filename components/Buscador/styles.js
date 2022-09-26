import styled from "styled-components";
import { Flex } from "rebass";

const ContenedorPrincipal = styled(Flex)`
  margin: auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: center;
`;

const Titulo = styled.h2`
  height: 50px;
  margin: 0 0 5px 0;
  font-size: 25px;
  background-color: #e02e21;
  padding: 10px 15px;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: 500;
`;

const Buscador = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: flex-end;
`;

const CampoDeTexto = styled.input`
  line-height: 51px;
  padding: 0 20px;
  outline: 0;
  font-size: 15px;
  color: gray;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: block;
  background-color: #fcfcfc;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  opacity: 1;
  height: 50px;
  margin: 0;
  border-radius: 0 0 10px 10px;
`;

const IconoBuscador = styled.i`
  cursor: pointer;
  position: absolute;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 900;
  color: #707070;
`;

export {
  ContenedorPrincipal,
  Titulo,
  Buscador,
  CampoDeTexto,
  IconoBuscador
}