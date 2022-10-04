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
  Etiqueta,
  ContenedorTipoDePropiedad,
  AnclaTipoDePropiedad,
  IconoTipoDePropiedad,
  BotonBusqueda,
  iconoBuscar
} from "./styles";

const BarraBuscadorHome = () => {
  return (
    <ContenedorPrincipal>
      <Fondo></Fondo>
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
            <TipoDeBusqueda>
              <Etiqueta>Alquiler</Etiqueta> {/*ver si les agrego compra y venta a las etiquetas */}
              <Etiqueta>Venta</Etiqueta>
            </TipoDeBusqueda>
            <ContenedorTipoDePropiedad>
              <AnclaTipoDePropiedad>
                <IconoTipoDePropiedad></IconoTipoDePropiedad>
                {/* Un UL falta */}
              </AnclaTipoDePropiedad>
              <BotonBusqueda>
                <iconoBuscar></iconoBuscar>
              </BotonBusqueda>
            </ContenedorTipoDePropiedad>
          </FormularioBuscador>
        </ContenedorBuscador>
      </ContenedorSecundario>
    </ContenedorPrincipal>
  )
}

export default BarraBuscadorHome;