import {
  ContenedorPrincipal,
  Titulo,
  Buscador,
  CampoDeTexto,
  IconoBuscador,
} from "./styles"

const ListaDeBusqueda = () => {
  return (
    <ContenedorPrincipal>
      <Titulo></Titulo>
      <Buscador>
        <CampoDeTexto></CampoDeTexto>
        <IconoBuscador></IconoBuscador>
      </Buscador>
    </ContenedorPrincipal>
  )
}

export default ListaDeBusqueda;