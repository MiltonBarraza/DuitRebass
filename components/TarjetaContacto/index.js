import Image from "next/image";
import { Contactos } from "../../config";
import {
  ContenedorPrincipal,
  ContenedorSecundario,
  ContenedorImagen,
  ContenedorTexto,
  Ancla,
  Texto,
} from "./styles";

const TarjetaContacto = () => {
  return (
    <ContenedorPrincipal className="ocultarEnMovil">
      <ContenedorSecundario>
        <ContenedorImagen>
          <Image
            src="/imagenes/duit-rojo-horizontal.png"
            alt="duit-rojo-horizontal.png"
            layout="fill"
            objectFit="contain"
          />
        </ContenedorImagen>

        <ContenedorTexto>
          <Texto> San Luis 145, 1° Oficina H </Texto>
          <Texto>  Barrio Nueva Córdoba </Texto>
          <Texto>  Córdoba - Argentina </Texto>
          <Ancla href={`tel:+${Contactos.whatsappDuit.numero}`}>{Contactos.whatsappDuit.formateado}</Ancla>
        </ContenedorTexto>
      </ContenedorSecundario>
    </ContenedorPrincipal>
  )
}

export default TarjetaContacto;