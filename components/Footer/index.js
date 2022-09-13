import Image from "next/image";
import { Contactos } from "../../config"
import {
  ContenedorPrincipal,
  ContenedorLogos,
  ContenedorTexto,
  Texto,
  ContenedorDatos,
  Datos,
  Telefono,
  LogoDuit,
  LogoByHa,
} from "./styles";

export default function Footer() {
  return (
        <ContenedorPrincipal>
          <ContenedorTexto>
                <Texto>
                  Sabemos que digan lo que digan, no hay mejor lugar que ese donde podés escribir tu propia historia,
                  y por eso estamos con vos para darle la bienvenida a los mejores momentos que vas a vivir.
                </Texto>
          </ContenedorTexto>
          <ContenedorLogos>
            <LogoDuit>
              <Image
                src="/images/duit_id_blanco_horizontal.png"
                height={55}
                width={190}
                alt={"duit_id_blanco_horizontal.png"}
              />
            </LogoDuit>
            <LogoByHa>
              <Image
                src="/images/byha.png"
                height={25}
                width={55}
                alt={"byha.png"}
              />
            </LogoByHa>
          </ContenedorLogos>
          <ContenedorDatos>
          <Datos>San Luis 145, 1° Oficina H</Datos>
          <Datos>Barrio Nueva Córdoba</Datos>
          <Datos>Córdoba - Argentina</Datos>
          <Datos><Telefono href={`tel:+${Contactos.whatsappDuit.numero}`}>{Contactos.whatsappDuit.formateado}</Telefono></Datos>
          </ContenedorDatos>
        </ContenedorPrincipal>
  )
}