import { useState } from "react";
import {
  TipoDeBusqueda,
  EtiquetaAlquiler,
  EtiquetaVenta,
  InputEtiqueta,
} from "./styles";

const Etiqueta = () => {
  const [activo, setAlquiler] = useState(true);
  return (
    <TipoDeBusqueda>
      <EtiquetaAlquiler for="alquiler" active={activo} >Alquiler
        <InputEtiqueta onClick={() => setAlquiler(true)} id="alquiler"  type="radio" name="alquiler" checked="checked" value={1} />
      </EtiquetaAlquiler>
      <EtiquetaVenta for="venta" active={!activo} >Venta
        <InputEtiqueta onClick={() => setAlquiler(false)} id="venta" type="radio" name="venta" checked="checked" value={2}/>
      </EtiquetaVenta>
    </TipoDeBusqueda>
  )
}

export default Etiqueta;