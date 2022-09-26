import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContenedorPrincipal,
  Titulo,
  Buscador,
  CampoDeTexto,
  IconoBuscador,
} from "./styles"

const ListaDeBusqueda = () => {
  return (
    <ContenedorPrincipal className="ocultarEnMovil">
      <Titulo>duit emprendimientos</Titulo>
      <Buscador>
        <CampoDeTexto type={"text"} placeholder={"Ingresá barrio, ciudad o emprendimiento"}></CampoDeTexto>
        <IconoBuscador href={"./home"}><FontAwesomeIcon icon={faSearch} /></IconoBuscador>
      </Buscador>
    </ContenedorPrincipal>
  )
}

export default ListaDeBusqueda;