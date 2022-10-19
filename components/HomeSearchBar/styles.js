import styled from "styled-components";
import { Box } from "rebass";

const ContenedorPrincipal = styled.section`
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

  @media (max-width: 767px) {
    height: 450px;
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
  color: #e02e21;

  @media only screen and (max-width: 1024px) {
    left: 30px;
    width: 25%;
    min-width: 125px;
    max-width: 150px;
    bottom: 28px;
    opacity: 1;
    top: unset;
  }
`;

const ContenedorSecundario = styled(Box)`
  position: relative;
  z-index: 10;
  padding: 180px 0;

  @media only screen and (min-width: 1024px) {
    padding: 20vh 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0;
  }
`;

const ContenedorBuscador = styled(Box)`
  @media (max-width: 767px) {
    padding: 0px 15px;
  }

  @media (max-width: 767px) {
    padding: 0px 15px;
  }
`;

const Encabezado = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
 
  strong {
    text-align: center;
    color: #fff;
    font-size: 36px;

    @media (max-width: 767px) {
      text-align: center;
      font-size: 27px;
    }
  }

  @media (max-width: 767px) {
    text-align: center;
    font-size: 27px;
  }
`;

const FormularioBuscador = styled.form`
  display: flex !important;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  > * {
    height: 35px;
    max-width: 250px;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    button {
      margin: 0px !important;
    }
  }

  @media (max-width: 767px) {
    > * {
      margin-bottom: 15px;
      max-width: 400px;
    }
  }
`;

const BotonBusqueda = styled.button`
  width: 100%;
  min-width: 150px;
  margin-left: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e02e21;
  top: 0;
  padding: 10px 20px;
  color: #fff;
  position: relative;
  transition: all .2s ease-in-out;
  cursor: pointer;
  margin-right: 6px;
  overflow: hidden;
  border: 0;

  &:before {
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all .2s;
  }
    &:hover:before {
      opacity: .1
    }
`;

const IconoBuscar = styled.i`
  padding-left: 5px;
  padding-right: 4px;
  font-weight: 900;
  line-height: 1;
  font-size: 16px;
  color: #fff; 
  cursor: pointer;
`;

export {
  ContenedorPrincipal,
  Fondo,
  IconoAsistente,
  ContenedorSecundario,
  ContenedorBuscador,
  Encabezado,
  FormularioBuscador,
  BotonBusqueda,
  IconoBuscar
}