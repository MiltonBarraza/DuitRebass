import { Box, Flex } from "rebass";
import styled from "styled-components";

export {
  ContenedorPrincipal,
  ContenedorSecundario,
  ContenedorImagen,
  ContenedorTexto,
  Ancla,
  Texto,
}

const ContenedorPrincipal = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: 1024px) {
    flex: 0 0 45%;
  }
`;

const ContenedorSecundario = styled(Box)`
  background-color: white;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 3px 1px lightgrey;
  padding: 20px
`;

const ContenedorImagen = styled(Box)`
  width: 65%;
  height: 42%;
  position: relative
  `;

const ContenedorTexto = styled(Box)`
  line-height: 20px;
  padding: 10px;
  font-size: 15px
  `;

const Ancla = styled.a`
  color: #e02e21;
  transition: color .2s;

  &:hover {
    text-decoration: none;
    color: #333;
  }
  `;

const Texto = styled.p`
  line-height: 20px
  `;