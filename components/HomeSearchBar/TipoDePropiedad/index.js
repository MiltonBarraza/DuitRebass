import React, { useState } from "react";
import Select from "react-select";
import {
  customStyles,
  ContenedorTipoDePropiedad,
} from "./styles"

const propiedades = [
  { label: "Casas / Dúplex", value: "1" },
  { label: "Departamento", value: "2" },
  { label: "Locales", value: "3" },
  { label: "Oficinas", value: "4" },
  { label: "Terrenos", value: "5" },
  { label: "Cocheras", value: "6" },
  { label: "Depositos", value: "7" },
]

export const TipoDePropiedad = () => {
  const [propiedadElejida, setPropiedadElejida] = useState();
  const handleSelectChange = ({ value }) => {
    console.log(value);
    setPropiedadElejida = (value);
  }

  return (
    <ContenedorTipoDePropiedad>
      <Select
        defaultValue={{ label: "Tipo de Propiedad ", value: "vacio" }}
        options={propiedades}
        styles={customStyles}
        onChange={handleSelectChange}
      >
      </Select>
    </ContenedorTipoDePropiedad>
  )
}

export default TipoDePropiedad;