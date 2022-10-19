import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  ContenedorTipoDePropiedad,
  AnclaTipoDePropiedad,
  IconoTipoDePropiedad,
} from "./styles";

const ContenedorPropiedad = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <ContenedorTipoDePropiedad className="cambiar" onClick={() => setAbierto(!abierto)}>
      <AnclaTipoDePropiedad className={abierto ? "abierto" : ""}>Tipo de Propiedad
        <IconoTipoDePropiedad active={abierto} ><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></IconoTipoDePropiedad>
      </AnclaTipoDePropiedad>
    </ContenedorTipoDePropiedad>
  )
}

export default ContenedorPropiedad;