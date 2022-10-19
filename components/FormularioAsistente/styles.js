import styled from "styled-components"
import { Flex } from "rebass";

const ContenedorPrincipal =styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: 400px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const Mensaje = styled.h3`
  color: #e02e21;
  font-weight: bolder;
  width: 30%;
  line-height: 1.1;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    width: 90%;
    text-align: center;
    margin: 25px;
  }
`;

const Formulario = styled.form`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    border-radius: 10px;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    width: 80%;
    margin-bottom: 30px;
  }
`;

const ContenedorCampoDeTexto = styled(Flex)`
  width: 45%;
  position: relative;
  margin-bottom: 10px;

  input {
    border-radius: 10px;
  }
 
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const CampoDeTexto = styled.input`
  height: 50px;
  line-height: 51px;
  padding: 0 20px;
  outline: 0;
  font-size: 15px;
  color: gray;
  margin: 0 0 16px 0;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: block;
  background-color: #fcfcfc;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  opacity: 1;
  border-radius: 3px;
  transition: all .1s ease-in-out;

  &:focus + label,
  :not(:placeholder-shown) + label {
    transform: translateY(-40px);
    font-size: 90%;
    opacity: 1;
  }
`;

const Etiqueta = styled.label`
  position: absolute;
  top: 15px;
  margin: 0;
  padding-left: 20px;
  transition: all 200ms;
  opacity: 0.5;
  cursor: text;
  user-select: none;
  font-size: 16px;
  font-weight: normal;
  display: block;
  color: #707070;
  pointer-events: none;
`;

const BotonFormulario = styled.button`
  background-color: #e02e21;
  top: 0;
  padding: 10px 20px;
  color: #fff;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
  transition: all .2s ease-in-out;
  cursor: pointer;
  margin-right: 6px;
  overflow: hidden;
  border: 0;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }

  :before {
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
`;

const IconoCargando = styled.i`

`

export {
  ContenedorPrincipal,
  Mensaje,
  Formulario,
  ContenedorCampoDeTexto,
  CampoDeTexto,
  Etiqueta,
  BotonFormulario,
}