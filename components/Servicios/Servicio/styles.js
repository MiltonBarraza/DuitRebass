import { Flex, Box } from "rebass";
import styled from "styled-components";

const ImagenServicio = styled(Flex)`
  width: 135px;
  height: 135px;
  position: relative;
  justify-content: center;

@media only screen and (max-width: 1024px) {
  Imagenes {
    width: 100px !important;
    height: 100px !important;
  }

  div:nth-child(1) {
    width: 100px !important;
    height: 60px !important;
  }
}
`;

const TextoTooltip = styled.p`
  font-size: 15px;
  margin: 0 0 17px;
`;

const ContenedorIcono = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const IconoWhatsApp = styled.a `
  font-size: 30px;
  cursor: pointer;
  font-weight: 400;
  max-width: 200px;
  color: #128c7e;
`;

const IconoMail = styled.a`
  font-size: 30px;
  cursor: pointer;
  font-weight: 400;
  max-width: 200px;
  color: #de576b;
`

export {
  ImagenServicio,
  TextoTooltip,
  ContenedorIcono,
  IconoWhatsApp,
  IconoMail,
}