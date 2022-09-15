import {
    ContenedorPrincipal,
    Encabezado,
    Texto
} from "./styles";

const Opciones = () => {
    return (
        <ContenedorPrincipal>
            <Encabezado>En qué consiste nuestro servicio?</Encabezado>
            <Texto>Nuestro servicio de Asistente Personal Inmobiliario es la solución integral desarrollada por DUIT
                y pensada para que nuestros clientes obtengan los mayores beneficios a la hora de comprar un inmueble.</Texto>
            <Texto>Un verdadero trabajo a medida que consiste en buscar las mejores propiedades que se ajusten a lo que el
                cliente está buscando, <b> resguardando al máximo sus intereses y acompañándolo en cada momento de la operación.</b></Texto>
        </ContenedorPrincipal>
    )
}

export default Opciones;