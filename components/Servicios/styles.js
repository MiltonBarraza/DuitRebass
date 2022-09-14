import { Box, Flex } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Flex)`
  background-color: #f7f7f7;
  width: 100%;

  @media (min-width: 437px) {
    height: 320px;
  }
    
  @media (min-width: 698px) {
    height: 200px;
  }
`;

const ContenedorSecundario = styled(Flex)`
  background-color:  #e02e21;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 30px);
  border-radius: 10px;
  margin: auto;
  max-width: 1200px;
`;

const Titulo = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const ContenedorImagenes = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  >div:nth-child(1) {
    width: 135px ;
    height: 80px ;
  }
}

@media only screen and (max-width: 1024px) {
    
  >div:nth-child(1) {
    width: 100px ;
    height: 60px ;
  }
}
`;

export {
  ContenedorPrincipal,
  ContenedorSecundario,
  Titulo,
  ContenedorImagenes,
}