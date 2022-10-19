import {
  ContenedorPrincipal,
  Mensaje,
  Formulario,
  ContenedorCampoDeTexto,
  CampoDeTexto,
  Etiqueta,
  BotonFormulario,
} from "./styles";

const FormularioAsistente = () => {
  return (
    <ContenedorPrincipal>
      <Mensaje> Dejanos tus datos y nos comunicamos con vos. </Mensaje>
      <Formulario>
        <ContenedorCampoDeTexto>
          <CampoDeTexto name="nombre" placeholder=" " type="text" required="required" ></CampoDeTexto>
          <Etiqueta for="nombre">Nombre*</Etiqueta>
        </ContenedorCampoDeTexto>
        <ContenedorCampoDeTexto>
          <CampoDeTexto name="apellido" placeholder=" " type="text" required="required"></CampoDeTexto>
          <Etiqueta for="apellido">Apellido*</Etiqueta>
        </ContenedorCampoDeTexto>
        <ContenedorCampoDeTexto>
          <CampoDeTexto name="email" placeholder=" " type="text" required="required" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" ></CampoDeTexto>
          <Etiqueta for="email">Email*</Etiqueta>
        </ContenedorCampoDeTexto>
        <ContenedorCampoDeTexto>
          <CampoDeTexto name="teléfono" placeholder=" " type="text" required="required"></CampoDeTexto>
          <Etiqueta for="teléfono">Teléfono*</Etiqueta>
        </ContenedorCampoDeTexto>
        <BotonFormulario>Contactar</BotonFormulario>
      </Formulario>
    </ContenedorPrincipal>
  )
}

export default FormularioAsistente;