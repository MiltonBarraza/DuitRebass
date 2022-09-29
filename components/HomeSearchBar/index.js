import Image from "next/image";
import {
  ContenedorPrincipal,
  Fondo,
  IconoAsistente,
  ContenedorSecundario,
  ContenedorBuscador,
  Encabezado,
  FormularioBuscador,
  TipoDeBusqueda,
  EtiquetaAlquiler,
  EtiquetaVenta,
} from "./styles";

const HomeSearchBar = () => {
  return (
    <ContenedorPrincipal>
      <Fondo>
        {/* <Image
        src={"/imagenes/familia.png"}
        alt="Familia ingresando hogar"
        layout="fill"
        objectFit="cover"
        /> */}
      </Fondo>
      <IconoAsistente>
        <Image
          src={"/imagenes/boton-asistente.png"}
          alt="Circulo rojo asistente"
          width={180}
          height={180}
        />
      </IconoAsistente>
      <ContenedorSecundario>
        <ContenedorBuscador>
          <Encabezado>Encontrá el <strong>lugar</strong>, construí tu <strong>historia</strong>.</Encabezado>
          <FormularioBuscador>
            <TipoDeBusqueda>
              <EtiquetaAlquiler></EtiquetaAlquiler>
              <EtiquetaVenta></EtiquetaVenta>
            </TipoDeBusqueda>
          </FormularioBuscador>
        </ContenedorBuscador>
      </ContenedorSecundario>
    </ContenedorPrincipal>
  )
}

export default HomeSearchBar;