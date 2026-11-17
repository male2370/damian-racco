import { historia } from '../data.js'
import Foto from './foto.jsx'
import Revela from './revela.jsx'

export default function Historia() {
  return (
    <section id="historia" className="banda banda-oliva">
      <div className="contenedor seccion dos-columnas">
        <Revela>
          <Foto src={historia.foto} descripcion={historia.fotoDescripcion} className="historia-foto" />
        </Revela>
        <Revela demora={150} className="historia-texto">
          <span className="etiqueta">Nuestra historia</span>
          <h2>{historia.titulo}</h2>
          <p className="seccion-bajada">{historia.texto}</p>
          <div className="equipo">
            {historia.equipo.map((p) => (
              <div key={p.nombre}>
                <p className="equipo-nombre">{p.nombre}</p>
                <p className="equipo-rol">{p.rol}</p>
              </div>
            ))}
          </div>
        </Revela>
      </div>
    </section>
  )
}