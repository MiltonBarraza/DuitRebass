import TarjetaContacto from "../TarjetaContacto";

import {
  ContenedorSeccionContacto,
  ContenedorPrincipalContacto,
  Descripción,
  ContenedorFormulario,
  ContenedorCampoDeTexto,
  CampoDeTexto,
  Etiqueta,
  AreaDeTexto,
  BotonContacto
} from "./styles"

const Contacto = () => {
  return (

    <ContenedorSeccionContacto id="contacto">
      <ContenedorPrincipalContacto>
        <Descripción> Dejanos tu consulta</Descripción>
        <ContenedorFormulario>
          <ContenedorCampoDeTexto>
            <CampoDeTexto name="name" type="text" placeholder=" " required="required"></CampoDeTexto>
            <Etiqueta for="name"> Nombre*</Etiqueta>
          </ContenedorCampoDeTexto>
          <ContenedorCampoDeTexto>
            <CampoDeTexto name="lastName" type="text" placeholder=" " ></CampoDeTexto>
            <Etiqueta for="lastName">Apellido</Etiqueta>
          </ContenedorCampoDeTexto>
          <ContenedorCampoDeTexto>
            <CampoDeTexto name="email" type="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" placeholder=" " required="required"></CampoDeTexto>
            <Etiqueta for="email">Email*</Etiqueta>
          </ContenedorCampoDeTexto>
          <ContenedorCampoDeTexto>
            <CampoDeTexto name="subject" type="text" placeholder=" " ></CampoDeTexto>
            <Etiqueta for="subject">Teléfono</Etiqueta>
          </ContenedorCampoDeTexto>
          <ContenedorCampoDeTexto>
            <AreaDeTexto name="message*" placeholder=" " cols={30} rows={3} required="required" spellCheck="true"></AreaDeTexto>
            <Etiqueta for="message"> Mensaje*</Etiqueta>
          </ContenedorCampoDeTexto>
          <BotonContacto>Contactar</BotonContacto>
          <div></div>
          <div></div>
        </ContenedorFormulario>
      </ContenedorPrincipalContacto>
      <TarjetaContacto/>
    </ContenedorSeccionContacto>
  )
}

export default Contacto;