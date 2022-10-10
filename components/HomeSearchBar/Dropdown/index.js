import React, { useState } from "react";
import Select from "react-select";
import {
  Barra
} from "./styles"

const propiedades = [
  {label: "Casas / Dúplex", value: "Casas / Dúplex"},
  {label: "Departamento", value:"2"},
  {label: "Locales", value:"3"},
  {label: "Oficinas", value:"4"},
  {label: "Cocheras", value:"5"},
  {label: "Depositos", value:"6"},
]

export const DropDown = () => {
 
  const [propiedadElejida, setPropiedadElejida] = useState();
  
  const handleSelectChange = ( { value } ) => { 
    console.log( value );
    setPropiedadElejida = ( value );
  }
 
  return (
    <div>
      {/* <p> Propiedad : { propiedadElejida } </p>
      <h1> Holaaaa { propiedadElejida } </h1> */}
      <Barra
     
      defaultValue={ { label: "Tipo de Propiedad ", value: "empty" } }
      options = { propiedades }
      onChange = { handleSelectChange }
      >
      </Barra>


      
    </div>

  )
}

export default DropDown;

