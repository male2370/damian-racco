import { useEffect, useState } from 'react'
import { marca } from '../data.js'

const links = [
  { href: '#experiencias', texto: 'Experiencias' },
  { href: '#ebooks', texto: 'E-books' },
  { href: '#historia', texto: 'Historia' },
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scrolleado, setScrolleado] = useState(false)

  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 20)
    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  const cerrar = () => setAbierto(false)

  return (
    <header className={`header ${scrolleado ? 'header-scroll' : ''}`}>
      <div className="contenedor header-fila">
        <a href="#inicio" className="logo" onClick={cerrar}>
          <span className="monograma">{marca.monograma}</span>
          <span className="logo-texto">
            <span className="logo-nombre">{marca.nombre}</span>
            <span className="logo-bajada">{marca.bajada}</span>
          </span>
        </a>

        <nav className={`nav ${abierto ? 'nav-abierta' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={cerrar}>{l.texto}</a>
          ))}
          <a href="#reservar" className="boton boton-lleno" onClick={cerrar}>Reservar fecha</a>
        </nav>

        <button
          className="menu-boton"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}