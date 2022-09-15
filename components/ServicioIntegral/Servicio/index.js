import Image from "next/image"

const ServicioIntegralImagenes = [

  { src: 'servicio-integral.png' },
  { src: 'caracteristicas.png' },
  { src: "localizacion.png" },
  { src: "gastos.png" },
  { src: "informe.png" },
  { src: 'financiacion.png' },
  { src: "precio-correcto.png" },
  { src: "garantias-legales.png" },
  { src: "tramites.png" },

]

const ServicioImagen = ( {servicio} ) => {
  return (
    <div>
      <Image
        src={`/imagenes/servicioIntegral/${servicio.src}`}
        alt={"algo"}
        layout="fill"
        objectFit="content"
      />
    </div>
  )
}

export default ServicioImagen;
export {
  ServicioIntegralImagenes
}