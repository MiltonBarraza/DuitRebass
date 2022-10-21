import ScrollButton from "../components/BotonAInicio/index";
import { BotonInicio } from "../components/BotonInicio";

export default function Main() {
  return (
    <>
      <h1>Hola from Home</h1>
      <h1 id="duit360">Duit 360</h1>
      <h1 id="servicios">Servicios</h1>
      <h1 id="consejeros">Consejeros</h1>
      <h1 id="contacto">Contacto</h1>
      <ScrollButton/>
      <BotonInicio/>
    </>
  )
}