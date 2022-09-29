import styled from "styled-components";
import { Box, Flex } from "rebass";

export {
  ContenedorPrincipal,
  Fondo,
  IconoAsistente,
  ContenedorSecundario,
  ContenedorBuscador,
  Encabezado,
  FormularioBuscador,
  TipoDeBusqueda,
  EtiquetaAlquiler,
  EtiquetaVenta,
}

const ContenedorPrincipal = styled(Box)`
  background-image: url(imagenes/familia.png);
  background-attachment: fixed;
  background-position: 50% -64.3617px;  
  margin-top: -80px;
  height: 500px;
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
  position: relative;
  background-repeat: no-repeat;
  
  @media only screen and (min-width: 1024px) {
    min-height: 400px;
    height: 50vh;
  }
`;

const Fondo = styled(Box)`
  background-color: rgb(54, 56, 62);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .4;
`;

const IconoAsistente = styled.a`
  position: absolute;
  right: 25px;
  width: 180px;
  top: 80px;
  opacity: 0.92;
  border-radius: 10px;
  cursor: pointer;
  z-index: 100;
  position: fixed;
  height: fit-content;
  outline: none !important;
  color: #e02e21
`;

const ContenedorSecundario = styled(Box)`
  position: relative;
  z-index: 10;
  padding: 180px 0;

  media only screen and (min-width: 1024px) {
    padding: 20vh 0;
  }
`;

const ContenedorBuscador = styled(Box)`
`;

const Encabezado = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
  // margin-block-start: 0.83em;
  // margin-block-end: 0.83em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;

  strong {
    text-align: center;
    color: #fff;
    font-size: 36px;
  }
`;

const FormularioBuscador = styled(Flex)`
    margin-top: 20px;
    justify-content: center;
    align-items: center;

    > * {
      height: 35px;
      max-width: 250px;
     }
`;

const TipoDeBusqueda = styled(Flex)`
  padding-bottom: 35px;
  position: relative;
  text-align: center;
`;

const EtiquetaAlquiler = styled.label`
  background-color: #fff;
  color: #333;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 9px 18px;
  margin: 0 15px 0 0;
  float: left;
  transition: all .2s;
  border-radius: 3px; // Tiene que venir de arriba y ser 10
  width: 100px;
  font-size: 16px;
  font-weight: normal;
`;

const EtiquetaVenta = styled.label`
  background-color: #fff;
  color: #333;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 9px 18px;
  margin: 0 15px 0 0;
  float: left;
  transition: all .2s;
  border-radius: 3px; // Tiene que venir de arriba y ser 10
  width: 100px;
  font-size: 16px;
  font-weight: normal;
`;

const ContenedorTipoDePropiedad = styled(Box)`
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  outline: none !important;
`;