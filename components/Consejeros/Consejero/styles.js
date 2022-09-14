import { Flex } from "rebass";
import styled from "styled-components";
import Image from "next/image";

const ContenedorPrincipal = styled(Flex)`
  flex-direction: column;
  align-items: center;
  flex: 0 0 150px;
  margin-bottom: 20px;
`;

const Imagen = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const Nombre = styled.p`
  line-height: 20px;
  font-size: 13px;
  color: $gris-2;
  margin-top: 15px;
`;

const Telefono = styled.a`
  line-height: 20px;
  font-size: 13px;
  color: $gris-2;
`;

const ContenedorIconos = styled(Flex)`
  width: 40%;
  justify-content: space-around;
`;

const Icono = styled.a`
  font-size: 20px;
  color: $gris-2;
`;

export {
  ContenedorPrincipal,
  Imagen,
  Nombre,
  Telefono,
  ContenedorIconos,
  Icono
}