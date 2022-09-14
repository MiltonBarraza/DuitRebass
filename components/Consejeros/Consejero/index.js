import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  ContenedorPrincipal,
  ContenedorIconos,
  Imagen,
  Nombre,
  Telefono,
  Icono
} from "./styles";

const Consejero = ({ consejero }) => {
  return (
    <ContenedorPrincipal>
      <Imagen
        src={`/imagenes/consejeros/${consejero.foto}`}
        alt={consejero.foto}
        width={100}
        height={100}
      />
      <Nombre>{consejero.nombre}</Nombre>
      <Telefono href={`tel:+{${consejero.telefono}}`}>{consejero.telefono}</Telefono>
      <ContenedorIconos>
        <Icono href={`mailto:${consejero.email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </Icono>
        <Icono href={`https://api.whatsapp.com/send?phone=${consejero.telefonoFormateado}`}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </Icono>
      </ContenedorIconos>
    </ContenedorPrincipal>
  )
}

export default Consejero;