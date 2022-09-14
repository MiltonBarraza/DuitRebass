import Image from "next/image";
import {
  ContenedorPrincipal,
  ImagenFondo,
  ContenedorSecundario,
  Titulo,
  Logo,
  Texto,
  ImagenComprar,
} from "./styles";

const Presentacion = () => {
  return (
    <ContenedorPrincipal>
      <ImagenFondo>
        <Image
          src={"/imagenes/familia.png"}
          alt={"familia.png"}
          layout="fill"
          objectFit="cover"
        />
      </ImagenFondo>
      <ContenedorSecundario>
        <Titulo>Presentamos</Titulo>
        <Logo>
          <Image
            src={"/imagenes/asistente-personal-blanco.png"}
            alt={"asistente-personal-blanco.png"}
            width={340}
            height={200}
          />
        </Logo>
        <Texto>El nuevo servicio de Duit para ayudar a las personas a tomar una de las decisiones más importantes de su vida.</Texto>
      </ContenedorSecundario>
      <ImagenComprar>
        <Image
          src={"/imagenes/comprar.png"}
          alt={"comprar.png"}
          width={265}
          height={270}
        />
      </ImagenComprar>
    </ContenedorPrincipal>
  )
}

export default Presentacion;