
import {
    // ContenedorSeccionContacto,
    ContenedorPrincipalContacto,
    Descripción,
    ContenedorFormulario,
    ContenedorTexto,
    CampoDeTexto,
    Etiqueta,
    AreaDeTexto,
    BotonContacto
  } from "./styles"

const Contacto = () => {
    return (

        // <ContenedorSeccionContacto id="contacto">

            <ContenedorPrincipalContacto>

                <Descripción> Dejanos tu consulta</Descripción>

                <ContenedorFormulario>
                    <ContenedorTexto>
                        <CampoDeTexto name="name" type="text" placeholder=" " required="required"></CampoDeTexto>
                        <Etiqueta for="name"> Nombre*</Etiqueta>
                    </ContenedorTexto>
                    <ContenedorTexto>
                        <CampoDeTexto name="lastName" type="text" placeholder=" " ></CampoDeTexto>
                        <Etiqueta for="lastName">Apellido</Etiqueta>
                    </ContenedorTexto>
                    <ContenedorTexto>
                        <CampoDeTexto name="email" type="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"  placeholder=" " required="required"></CampoDeTexto>
                        <Etiqueta for="email">Email*</Etiqueta>
                    </ContenedorTexto>
                    <ContenedorTexto>
                        <CampoDeTexto name="subject" type="text" placeholder=" " ></CampoDeTexto>
                        <Etiqueta for="subject">Teléfono</Etiqueta>
                    </ContenedorTexto>
                    <ContenedorTexto>
                        <AreaDeTexto name="message*" placeholder=" " cols={30} rows={3} required="required" spellCheck="true"></AreaDeTexto>
                        <Etiqueta for="message"> Mensaje*</Etiqueta>
                    </ContenedorTexto>

                    <BotonContacto>Contactar</BotonContacto>

                    <div></div>
                    <div></div>

                </ContenedorFormulario>
            </ContenedorPrincipalContacto>

            
        // </ContenedorSeccionContacto>
    )
}

export default Contacto;