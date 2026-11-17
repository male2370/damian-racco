import { marca } from '../data.js'

export default function Footer() {
  const anio = new Date().getFullYear()
  return (
    <footer className="contenedor footer">
      <span className="footer-marca">{marca.nombre}</span>
      <span className="footer-links">
        <a href={`https://instagram.com/${marca.instagram}`} target="_blank" rel="noreferrer">Instagram</a>
        <span aria-hidden="true">·</span>
        <a href={`https://wa.me/${marca.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
        <span aria-hidden="true">·</span>
        <span>{marca.ciudad}</span>
      </span>
      <span className="footer-copy">© {anio} {marca.nombre}</span>
    </footer>
  )
}