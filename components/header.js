import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/asistente'>
        <a>Asistente</a>
      </Link>
      <Link href='/propiedades'>
        <a>Alquiler</a>
      </Link>
      <Link href='/propiedades'>
        <a>Venta</a>
      </Link>
      <Link href='/emprendimientos'>
        <a>Emprendimientos</a>
      </Link>
      <Link href='/#duit360'>
        <a>Duit 360º</a>
      </Link>
      <Link href='/#servicios'>
        <a>Servicios  </a>
      </Link>
      <Link href='/#consejeros'>
        <a>Consejeros</a>
      </Link>
      <Link href='/#contacto'>
        <a>Contacto</a>
      </Link>
    </>
  )
}