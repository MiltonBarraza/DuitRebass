import { Box, Flex } from "rebass";
import styled from "styled-components";

export {
  ContenedorPrincipal,
  ContenedorImagen,
  ContenedorTexto,
  Ancla,
  Texto
}

const ContenedorPrincipal = styled(Box)`
  background-color: white;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 3px 1px lightgrey;
  padding: 20px;`

const ContenedorImagen = styled(Box)`
  width: 65%;
  height: 42%;
  position: relative;`

const ContenedorTexto = styled(Box)`
  line-height: 20px;
  padding: 10px;
  font-size: 15px;`

const Ancla = styled.a`
  color: #e02e21;`

const Texto = styled.p`
  line-height: 20px;`