import styled, { css } from "styled-components";
import { Flex } from "rebass";

const EstilosCompartidos = css`
  background-color: #fff;
  color: #333;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 9px 18px;
  margin: 0 15px 0 0;
  float: left;
  transition: all .2s;
  width: 100px;
  font-size: 16px;
  font-weight: normal;

  &:hover {
    background-color: #e02e21;
    color: #fff;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const EstilosCompartidosActivos = css`
  background-color: #e02e21;
  color: #fff;
`;

const TipoDeBusqueda = styled(Flex)`
  padding-bottom: 35px;
  position: relative;
  text-align: center;

  > * {
    height: 35px;
    line-height: normal;
    border-radius: 10px;
  }
  
  @media (max-width: 767px) {
    > *:first-child {
      margin-right: 15px;
    }
  }

  @media (max-width: 767px) {
    > * {
      margin: 0px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const EtiquetaAlquiler = styled.label.attrs(
  (props => ({}))
)`
  ${EstilosCompartidos}

  ${(props) =>
    props.active &&
    `
      ${EstilosCompartidosActivos}
  `}
`;

const EtiquetaVenta = styled.label.attrs(
  (props => ({}))
)`
  ${EstilosCompartidos}

  ${(props) =>
    props.active &&
    `
    ${EstilosCompartidosActivos}
  `}
`;

const InputEtiqueta = styled.input`
  display: none
`;

export {
  TipoDeBusqueda,
  EtiquetaAlquiler,
  EtiquetaVenta,
  InputEtiqueta,
}