import { ServicioComponentes } from "../../config";
import Servicio from "./Servicio";
import {
  ContenedorPrincipal,
  ContenedorSecundario,
  Titulo,
  ContenedorImagenes,
} from "./styles";

const Servicios = () => {
  return (
      <ContenedorPrincipal>
        <ContenedorSecundario>
          <Titulo>Servicios</Titulo>
          <ContenedorImagenes>
            {ServicioComponentes.map((servicio, index) => <Servicio key={index} servicio={servicio}/> )}
          </ContenedorImagenes>
        </ContenedorSecundario>
      </ContenedorPrincipal >
  )
}

export default Servicios;