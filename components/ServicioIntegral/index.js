import { ServicioIntegralImagenes } from "./Servicio/index";
import ServicioImagen from "./Servicio/index";
import {
  ContenedorPrincipal,
  ContenedorImagenes,
  Encabezado,
} from "./styles";

const ServicioIntegral = () => {
  return (
    <ContenedorPrincipal>
      <Encabezado>Somos el acompañamiento perfecto<br></br> para un mercado cada vez más complejo.</Encabezado>
      <ContenedorImagenes>
       {ServicioIntegralImagenes.map((servicio, index) => <ServicioImagen key={index} servicio={servicio} /> )} 
      </ContenedorImagenes>
    </ContenedorPrincipal>
  )
}

export default ServicioIntegral;