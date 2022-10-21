import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  Button2
} from "./styles";

const BotonInicio = () => {
  const [esVisible, setEsVisible] = useState(false)

  const cambiarVisibilidad = () => {
    if (window.scrollY > 300) {
      setEsVisible(true)
    } else {
      setEsVisible(false)
    }
  };

  const IrAlInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", cambiarVisibilidad)

    return () => {
      window.removeEventListener("scroll", cambiarVisibilidad)
    }
  }, [])

  return (
    <Button2 onClick={IrAlInicio} style={{ opacity: esVisible ? '1' : '0' }}>
      <FontAwesomeIcon icon={faAngleUp} />
    </Button2>
  )
}

export {
  BotonInicio,
}