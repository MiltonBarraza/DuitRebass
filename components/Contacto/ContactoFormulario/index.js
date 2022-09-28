import { useForm, ValidationError } from "@formspree/react";
import {
  ContenedorFormulario,
  ContenedorCampoDeTexto,
  CampoDeTexto,
  Etiqueta,
  AreaDeTexto,
  BotonContacto
} from "./styles"

const ContactoFormulario = () => {
  const [state, handleSubmit] = useForm("xpzndnno"); 

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <ContenedorFormulario onSubmit={handleSubmit}>
      <ContenedorCampoDeTexto>
        <CampoDeTexto id="name" name="name" type="text" placeholder=" " required="required"></CampoDeTexto>
        <Etiqueta htmlFor="name"> Nombre*</Etiqueta>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </ContenedorCampoDeTexto>
      <ContenedorCampoDeTexto>
        <CampoDeTexto id="lastname" name="lastName" type="text" placeholder=" " ></CampoDeTexto>
        <Etiqueta htmlFor="lastName">Apellido</Etiqueta>
        <ValidationError prefix="LastName" field="lastName" errors={state.errors} />
      </ContenedorCampoDeTexto>
      <ContenedorCampoDeTexto>
        <CampoDeTexto id="email" name="email" type="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" placeholder=" " required="required"></CampoDeTexto>
        <Etiqueta htmlFor="email">Email*</Etiqueta>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </ContenedorCampoDeTexto>
      <ContenedorCampoDeTexto>
        <CampoDeTexto id="subject" name="subject" type="text" placeholder=" " ></CampoDeTexto>
        <Etiqueta htmlFor="subject">Teléfono</Etiqueta>
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </ContenedorCampoDeTexto>
      <ContenedorCampoDeTexto>
        <AreaDeTexto id="message" name="message*" placeholder=" " cols={30} rows={3} required="required" spellCheck="true"></AreaDeTexto>
        <Etiqueta htmlFor="message"> Mensaje*</Etiqueta>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </ContenedorCampoDeTexto>
      <BotonContacto type="submit" disabled={state.submitting}>Contactar</BotonContacto>
      <ValidationError errors={state.errors} />
    </ContenedorFormulario>
  );
}

export default ContactoFormulario; 
