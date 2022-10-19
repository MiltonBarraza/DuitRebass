import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  ContenedorPrincipal,
  Fondo,
  IconoAsistente,
  ContenedorSecundario,
  ContenedorBuscador,
  Encabezado,
  FormularioBuscador,
  BotonBusqueda,
  IconoBuscar,
} from "./styles";
import TipoDeBusqueda from "./TipoDeBusqueda";
import TipoDePropiedad from "./TipoDePropiedad";

const BuscadorHome = () => {
  return (
    <ContenedorPrincipal>
      <Fondo />
      <IconoAsistente href="/asistente">
        <Image
          src={"/imagenes/boton-asistente.png"}
          alt="Circulo rojo, asistente inmobiliario personal"
          width={180}
          height={180}
        />
      </IconoAsistente>
      <ContenedorSecundario>
        <ContenedorBuscador>
          <Encabezado>Encontrá el <strong>lugar</strong>, construí tu <strong>historia</strong>.</Encabezado>
          <FormularioBuscador>
            <TipoDeBusqueda />
            <TipoDePropiedad />
            <BotonBusqueda> Buscar
              <IconoBuscar><FontAwesomeIcon icon={faSearch} /></IconoBuscar>
            </BotonBusqueda>
          </FormularioBuscador>
        </ContenedorBuscador>
      </ContenedorSecundario>
    </ContenedorPrincipal>
  )
}

export default BuscadorHome;