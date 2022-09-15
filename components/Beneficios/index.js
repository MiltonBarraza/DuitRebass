import Image from "next/dist/client/image";

import {
  ContenedorPrincipal,
  ContenedorSecundario,
  Encabezado,
  ContenedorCirculos,
  CirculoRojo,
  NumeracionCirculos,
  TextoCiruclos,
} from "./styles";

const Beneficios = () => {
  return (
    <ContenedorPrincipal>
      <Image
        src="/imagenes/planos.png"
        alt="planos.png"
        layout="fill"
        objectFit="cover"
      />
      <ContenedorSecundario>
        <Encabezado>Beneficios de nuestro<br></br>servicio personalizado.</Encabezado>
        <ContenedorCirculos>
          <CirculoRojo>
            <NumeracionCirculos>#1</NumeracionCirculos>
            <TextoCiruclos>Reducimos el 70% del tiempo.</TextoCiruclos>
          </CirculoRojo>
          <CirculoRojo>
            <NumeracionCirculos>#2</NumeracionCirculos>
            <TextoCiruclos>Encontramos la propiedad ideal.</TextoCiruclos>
          </CirculoRojo>
          <CirculoRojo>
            <NumeracionCirculos>#3</NumeracionCirculos>
            <TextoCiruclos>Facilitamos los asuntos administrativos y jurídicos.</TextoCiruclos>
          </CirculoRojo>
          <CirculoRojo>
            <NumeracionCirculos>#4</NumeracionCirculos>
            <TextoCiruclos>Cerramos los mejores acuerdos para que ahorres.</TextoCiruclos>
          </CirculoRojo>
          <CirculoRojo>
            <NumeracionCirculos>#5</NumeracionCirculos>
            <TextoCiruclos>Equipo de profesionales dedicados exlusivamente.</TextoCiruclos>
          </CirculoRojo>
          <CirculoRojo>
            <NumeracionCirculos>#6</NumeracionCirculos>
            <TextoCiruclos>Te conocemos y entendemos lo que necesitás.</TextoCiruclos>
          </CirculoRojo>
        </ContenedorCirculos>
      </ContenedorSecundario>
    </ContenedorPrincipal>
  )
}

export default Beneficios;