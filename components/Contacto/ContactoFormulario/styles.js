import styled, { css } from "styled-components";
import { Flex } from "rebass";

const EstilosCompatidos = css`
  height: 51px;
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
  border-radius: 10px;
  opacity: 1;
  user-select: none;
`;

const EstilosCompatidosLabels = css`
  position: absolute;
  padding-left: 20px;
  transition: all 200ms;
  opacity: 0.5;
  cursor: text;
`;

const ContenedorFormulario = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
  @media only screen and (min-width: 1024px) {
    >div:nth-child(5) {
      flex: 1 1 100%;
  }
`;

const ContenedorCampoDeTexto = styled(Flex)`
  width: 100%;
  align-items: center;
  margin-bottom: 25px;

  @media only screen and (min-width: 1024px) {
    flex: 0 0 48%;
  }
  `;

  const CampoDeTexto = styled.input`
    padding: 0px 20px;
    ${EstilosCompatidos};
    &:focus + label,
    :not(:placeholder-shown) + label {
      transform: translateY(-35px);
      font-size: 90%;
      opacity: 1;
    }
  `;

  const Etiqueta = styled.label`
    display: block;
    font-weight: bold;
    font-size: 16px;
    font-weight: normal;
    user-select: none;
    ${EstilosCompatidosLabels};
  `;

  const AreaDeTexto = styled.textarea`
    min-height: 130px;
    transition: none!important;
    min-width: 100%;
    padding: 20px;
    ${EstilosCompatidos};
    &:focus + label,
    :not(:placeholder-shown) + label {
      transform: translateY(-75px);
      font-size: 90%;
      opacity: 1;
    }
  `;

  const BotonContacto = styled.button`
      width: 100%;
      max-width: 300px;
      border-radius: 10px;
      z-index: 10;
      background-color: #e02e21;
      top: 0;
      padding: 10px 20px;
      color: #fff;
      position: relative;
      font-size: 15px;
      font-weight: 500;
      transition: all .2s ease-in-out;
      cursor: pointer;
      margin-right: 6px;
      overflow: hidden;
      border: 0;
  `;

  export {
    EstilosCompatidos,
    EstilosCompatidosLabels,
    ContenedorFormulario,
    ContenedorCampoDeTexto,
    CampoDeTexto,
    Etiqueta,
    AreaDeTexto,
    BotonContacto,
} 