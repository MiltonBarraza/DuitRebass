import { Box, Flex } from "rebass";
import styled from "styled-components";


const ContenedorPrincipal = styled(Flex)`
  width: 100%;
  background-color: #e02e21;
  padding-top: 40px;
  flex-direction: column;
  height: 700px;
  position: absolute;

  div:not(:first-of-type) {
    position: absolute;
    border-radius: 50%;
    background-color: #e02e21;

    
  }

  div :nth-child(1) {
    width: 1000px;
    height: 500px;
    position: relative;

    @media only screen and (max-width: 1024px) {
      display: none
    }
  }

  div >:nth-child(1n+2) {
    width: 140px;
    height: 140px;
  }

  div >:nth-child(2) {
    top: 70px;
    left: 40px;
  }

  div:nth-child(3) {
    top: 0px;
    left: 280px;
  }

  div:nth-child(4) {
    top: 0px;
    right: 280px;
  }

  div:nth-child(5) {
    top: 70px;
    right: 40px;
  }

  div:nth-child(6) {
    top: 260px;
    right: 40px;
  }

  div:nth-child(7) {
    bottom: 0;
    right: 280px;
  }

  div:nth-child(8) {
    bottom: 0;
    left: 280px;
  }

  div:nth-child(9) {
    top: 260px;
    left: 40px;
  }

  @media only screen and (max-width: 1024px) {
    height: fit-content;
    padding: 20px 0;
  }

  @media only screen and(max - width: 1024px) {
    {ContenedorPrincipal} div >:nth-child(2) {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    max - width: 140px;
    max - height: 140px;}
  }

`;

const ContenedorImagenes = styled(Box)`
  margin: auto;
  position: relative;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const Encabezado = styled.h2`
  text-align: center;
  font-weight: bolder;
  color: white;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1024px) {
    br{
      display: none;
    }
  }
`;

export {
  ContenedorPrincipal,
  ContenedorImagenes,
  Encabezado
}

// .servicioIntegral {
//   width: 100 %;
//   background - color: $rojo - 1;
//   padding - top: 40px;
//   display: flex;
//   flex - direction: column;
//   height: 700px;
//   position: absolute;

//     .imagesContainer {
//     margin: auto;
//     position: relative;
//   }

//   div: not(.imagesContainer) {
//     position: absolute;
//     border - radius: 50 %;
//     background - color: $rojo - 1;
//   }

//   div: nth - child(1) {
//     width: 1000px;
//     height: 500px;
//     position: relative;
//   }

//   div >: nth - child(1n + 2) {
//     width: 140px;
//     height: 140px;
//   }

//   div >: nth - child(2) {
//     top: 70px;
//     left: 40px;
//   }

//   div: nth - child(3) {
//     top: 0px;
//     left: 280px;
//   }

//   div: nth - child(4) {
//     top: 0px;
//     right: 280px;
//   }

//   div: nth - child(5) {
//     top: 70px;
//     right: 40px;
//   }

//   div: nth - child(6) {
//     top: 260px;
//     right: 40px;
//   }

//   div: nth - child(7) {
//     bottom: 0;
//     right: 280px;
//   }

//   div: nth - child(8) {
//     bottom: 0;
//     left: 280px;
//   }

//   div: nth - child(9) {
//     top: 260px;
//     left: 40px;
//   }

//     h2 {
//     text - align: center;
//     font - weight: bolder;
//     color: white;
//     font - size: 30px;
//     margin - top: 20px;
//     margin - bottom: 10px;
//   }
// }



// @media only screen and(max - width: 1024px) {
//     .servicioIntegral div: not(.imagesContainer) {
//     position: relative;
//     top: 0;
//     right: 0;
//     left: 0;
//     max - width: 140px;
//     max - height: 140px;
//   }
// }





