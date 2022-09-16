import Image from "next/image";
import Asistente from "./Asistente/index";
import { Consejeros } from "../../config";

import {
  ContenedorPrincipal,
  ContenedorTexto,
  Texto,
  Imagen,
  ContenedorTarjetasAsistentes,
} from "./styles"

const Asistentes = () => {
  return (
    <ContenedorPrincipal>
      <ContenedorTexto>
        <Texto>Elegí a tu</Texto>
        <Imagen>
        <Image 
          src="/imagenes/asistente-personal-color.png"
          alt="asistente-personal-color.png"
          layout="fill"
          objectFit="content"
        />
        </Imagen>
      </ContenedorTexto>
      <ContenedorTarjetasAsistentes>
        {Consejeros.map((asistente, index) => <Asistente key={index} asistente={asistente}/>)}
      </ContenedorTarjetasAsistentes>
    </ContenedorPrincipal>
  )
}

export default Asistentes;