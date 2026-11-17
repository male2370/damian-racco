import { hero } from '../data.js'
import Foto from './foto.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="contenedor hero">
      <div className="hero-texto">
        <span className="etiqueta entra d1">{hero.etiqueta}</span>
        <h1 className="entra d2">
          {hero.titulo.map((linea) => (
            <span key={linea} className="linea">{linea}</span>
          ))}
        </h1>
        <p className="hero-parrafo entra d3">{hero.texto}</p>
        <div className="botones entra d4">
          <a href="#reservar" className="boton boton-lleno">Reservá tu cena</a>
          <a href="#experiencias" className="boton boton-borde">Ver experiencias</a>
        </div>
        <ul className="hero-puntos entra d5">
          {hero.puntos.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>

      <div className="hero-foto">
        <Foto src={hero.foto} descripcion={hero.fotoDescripcion} className="acerca" />
        <div className="tarjeta-flotante">
          <p className="tarjeta-flotante-titulo">{hero.destacado.titulo}</p>
          <p>{hero.destacado.texto}</p>
        </div>
      </div>
    </section>
  )
}