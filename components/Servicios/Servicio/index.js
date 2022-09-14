import Link from "next/link";
import Image from "next/image";
import { Tooltip } from '@nextui-org/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  ImagenServicio,
  TextoTooltip,
  ContenedorIcono,
  IconoWhatsApp,
  IconoMail,
} from "./styles";


const Servicio = ({ servicio }) => {

  if (servicio.imagen && servicio.textoTooltip) {
    return <Tooltip
      className="ImagenServicio"
      placement="bottom"
      hideArrow
      content={
        <>
          <TextoTooltip>{`${servicio.textoTooltip}`}</TextoTooltip>
          <ContenedorIcono >
            <IconoWhatsApp href={`${servicio.whatsAppHref}`}><FontAwesomeIcon icon={faWhatsapp} /></IconoWhatsApp>
            <IconoMail href={`${servicio.emailHref}`}><FontAwesomeIcon icon={faEnvelope} /></IconoMail>
          </ContenedorIcono>
        </>
      }
    >
      <ImagenServicio>
        <Image
          src={`/imagenes/servicios/${servicio.imagen}`}
          alt={`${servicio.imagen}`}
          layout="fill"
          objectFit="contain"
        />
      </ImagenServicio>
    </Tooltip>
  } if (servicio.imagen && servicio.tieneLink) {
    return (
      <ImagenServicio>
        <Link href={`${servicio.IrA.fragmento}`}><a>
          <Image
            src={`/imagenes/servicios/${servicio.imagen}`}
            alt={`${servicio.imagen}`}
            layout="fill"
            objectFit="contain"
          />
        </a></Link>
      </ImagenServicio>
    )
  } else
    return (
      <ImagenServicio>
        <a href={`${servicio.IrA.fragmento}`}>
          <Image
            src={`/imagenes/servicios/${servicio.imagen}`}
            alt={`${servicio.imagen}`}
            layout="fill"
            objectFit="contain"
          />
        </a>
      </ImagenServicio>
    )
}

export default Servicio;