 import { Flex } from "rebass";
 import styled from "styled-components";

const TarjetaAsistente =styled(Flex)`
  flex-direction: column;
  align-items: center;
  flex: 0 0 150px;
  margin-bottom: 20px;

  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
  }
  `;

const Nombre = styled.p`
  line-height: 20px;
  font-size: 13px;
  color: #707070;
  margin-top: 15px;
`;

const Telefono = styled.a`
  line-height: 20px;
  font-size: 13px;
  color: #707070;
`;


const TarjetaAsistentesIconos = styled(Flex)`
  width: 40%;
  justify-content: space-around;
`;

const Icono = styled.a`
  line-height: 20px;
  margin: 0;
  font-size: 20px;
  color: #707070;
`;

export {
    TarjetaAsistente,
    Nombre,
    Telefono,
    TarjetaAsistentesIconos,
    Icono,
}