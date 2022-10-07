import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Ejemplo from "./Ejemplo";
import ContenedorPropiedad from "./ContenedorPropiedad";
import Etiqueta from "./Etiquetas";
import {
  ContenedorPrincipal,
  Fondo,
  IconoAsistente,
  ContenedorSecundario,
  ContenedorBuscador,
  Encabezado,
  FormularioBuscador,
  Etiquetas,
  BotonBusqueda,
  IconoBuscar,
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
            <Etiqueta /> {/*ver si les agrego compra y venta a las etiquetas */}
            <ContenedorPropiedad />
            <BotonBusqueda> Buscar
              <IconoBuscar><FontAwesomeIcon icon={faSearch} /></IconoBuscar>
            </BotonBusqueda>
          </FormularioBuscador>
        </ContenedorBuscador>
      </ContenedorSecundario>
      <Ejemplo />
    </ContenedorPrincipal>
  )
}

export default BarraBuscadorHome;