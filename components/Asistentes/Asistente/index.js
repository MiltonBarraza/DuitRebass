import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  TarjetaAsistente,
  Nombre,
  Telefono,
  TarjetaAsistentesIconos,
  Icono,
} from "./styles"

const Asistente = ({ asistente }) => {

  if (!asistente.ocultarEnAsistentes) {
    return <TarjetaAsistente>
      <Image
        src={`/imagenes/consejeros/${asistente.foto}`}
        alt={asistente.foto}
        width={100}
        height={100}
      />
      <Nombre>{asistente.nombre}</Nombre>
      <Telefono href={`tel:+{${asistente.telefono}}`}>{asistente.telefono}</Telefono>
      <TarjetaAsistentesIconos>
        <Icono href={`mailto:${asistente.email}`}><FontAwesomeIcon icon={faEnvelope} /></Icono>
        <Icono href={`https://api.whatsapp.com/send?phone=${asistente.telefonoFormateado}`}><FontAwesomeIcon icon={faWhatsapp} /></Icono>
      </TarjetaAsistentesIconos>
    </TarjetaAsistente>
  }
}

export default Asistente;