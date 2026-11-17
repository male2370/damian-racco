import { ebooks, marca } from '../data.js'
import Revela from './revela.jsx'

function linkCompra(libro) {
  if (libro.link) return libro.link
  const mensaje = `Hola! Quiero el e-book "${libro.titulo}"`
  return `https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export default function Ebooks() {
  return (
    <section id="ebooks" className="contenedor seccion seccion-linea">
      <div className="seccion-cabeza">
        <Revela>
          <span className="etiqueta">E-books</span>
          <h2>Su cocina, en tu casa</h2>
        </Revela>
      </div>

      <div className="grilla grilla-3">
        {ebooks.map((libro, i) => (
          <Revela key={libro.titulo} como="article" demora={i * 120} className="ebook tarjeta-sola">
            {libro.tapa ? (
              <img className="ebook-tapa" src={libro.tapa} alt={`Tapa de ${libro.titulo}`} loading="lazy" />
            ) : (
              <div className={`ebook-tapa tapa-${libro.tono}`}>
                <span className="ebook-autor">{marca.nombre}</span>
                <span className="ebook-titulo">{libro.titulo}</span>
              </div>
            )}
            <div className="ebook-pie">
              <div>
                <p className="ebook-nombre">{libro.titulo}</p>
                <p className="ebook-precio">{libro.precio}</p>
              </div>
              <a className="boton boton-lleno boton-chico" href={linkCompra(libro)} target="_blank" rel="noreferrer">
                Lo quiero
              </a>
            </div>
          </Revela>
        ))}
      </div>
    </section>
  )
}