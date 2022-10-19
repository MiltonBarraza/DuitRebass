import { useState } from "react";
import {
  ContenedorTipoDeBusqueda,
  EtiquetaAlquiler,
  EtiquetaVenta,
  InputEtiqueta,
} from "./styles";

const TipoDeBusqueda = () => {
  const [activo, setAlquiler] = useState(true);
  return (
    <ContenedorTipoDeBusqueda>
      <EtiquetaAlquiler for="alquiler" active={activo} >Alquiler
        <InputEtiqueta onClick={() => setAlquiler(true)} id="alquiler"  type="radio" name="alquiler" checked="checked" value={1} />
      </EtiquetaAlquiler>
      <EtiquetaVenta for="venta" active={!activo} >Venta
        <InputEtiqueta onClick={() => setAlquiler(false)} id="venta" type="radio" name="venta" checked="checked" value={2}/>
      </EtiquetaVenta>
    </ContenedorTipoDeBusqueda>
  )
}

export default TipoDeBusqueda;