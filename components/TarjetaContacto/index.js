import Image from "next/image";
import Media from "react-media";
import { Contactos } from "../../config";
import {
  ContenedorPrincipal,
  ContenedorImagen,
  ContenedorTexto,
  Ancla,
  Texto
} from "./styles";

const TarjetaContacto = () => {
  return (
    <ContenedorPrincipal className="ocultarEnMovil">
          <ContenedorImagen> 
            <Image
              src="/images/duit-rojo-horizontal.png"
              alt="duit-rojo-horizontal.png"
              layout="fill"
              objectFit="contain"
            />
          </ContenedorImagen>
       
      <ContenedorTexto>
        <Texto>
          San Luis 145, 1° Oficina H <br></br>
          Barrio Nueva Córdoba <br></br>
          Córdoba - Argentina
        </Texto>
        <Ancla href={`tel:+${Contactos.whatsappDuit.numero}`}>{Contactos.whatsappDuit.formateado}</Ancla>
      </ContenedorTexto>
    </ContenedorPrincipal>
  )
}

export default TarjetaContacto;