import { Box, Flex } from "rebass";
import styled from "styled-components";

const ContenedorPrincipal = styled(Flex)`
  background-color: #f7f7f7;
  width: 100%

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
  width: 135px;
  height: 135px;
  position: relative;
  display: flex;
  justify-content: center;
`;



export {
  ContenedorPrincipal,
  ContenedorSecundario,
  Titulo,
  ContenedorImagenes,
}




// .servicios {
//     background-color: #f7f7f7;
//     width: 100%;

//     .serviciosContainer {
//         background-color:  #e02e21;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         width: calc(100% - 30px);
//         border-radius: 10px;
//         margin: auto;
//         max-width: 1200px;
//     }

//     h3 {
//         color: white;
//         font-size: 16px;
//         margin-top: 20px;
//         margin-bottom: 10px;
//         font-weight: 500;
//     }

//     .serviciosImagenes {
//         display: flex;
//         flex-wrap: wrap;
//         align-items: center;
//         justify-content: space-around;
//         width: 100%;

//         img {
//             cursor: pointer;
//         }

//         div:nth-child(1) {
//             width: 135px;
//             height: 80px;
//         }

//         .serviciosImagenContainer {
//             width: 135px;
//             height: 135px;
//             position: relative;
//             display: flex;
//             justify-content: center;
//         }
//     }
// }

// @media (min-width: 437px) {
//     .servicios {
//         height: 320px;
//     }
// }

// @media (min-width: 698px) {
//     .servicios {
//         height: 200px;
//     }
// }

// @media only screen and (max-width: 1024px) {
//     .serviciosImagenes {

//         .serviciosImagenContainer {
//             width: 100px !important;
//             height: 100px !important;
//         }

//         div:nth-child(1) {
//             width: 100px !important;
//             height: 60px !important;
//         }
//     }
// }