import { Box } from "rebass";
import styled from "styled-components";

const ContenedorTipoDePropiedad = styled(Box)`
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  outline: none !important;
`;

const AnclaTipoDePropiedad = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 0 0 18px;
  height: 35px;
  line-height: 51px;
  border: 1px solid #e0e0e0;
  background-color: #fcfcfc;
  color: #888;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 18px;
  z-index: 100;
  border-radius: 10px;
  outline: none !important;
  transition: color .2s;
  font-size: 15px;
`;

const IconoTipoDePropiedad = styled.i.attrs(
    (props) => ({}))`
    margin-right: 20px;
    transition: all 0.2s;
    font-size: 20px;
  
    ${(props) =>
      props.active &&
      `
        transform: rotateX(180deg);
        margin-bottom: 3px;
    `}
  `;

  export {
    ContenedorTipoDePropiedad,
    AnclaTipoDePropiedad,
    IconoTipoDePropiedad,
  }