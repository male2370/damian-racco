import { experiencias } from '../data.js'
import Foto from './foto.jsx'
import Revela from './revela.jsx'

export default function Experiencias() {
  return (
    <section id="experiencias" className="banda banda-oliva">
      <div className="contenedor seccion">
        <div className="seccion-cabeza">
          <Revela>
            <span className="etiqueta">Experiencias</span>
            <h2>Elegí cómo querés comer</h2>
          </Revela>
          <Revela demora={150} como="p" className="seccion-bajada">
            Cada experiencia incluye el menú, la cocina en tu casa y el servicio de sala de principio a fin.
          </Revela>
        </div>

        <div className="grilla grilla-3">
          {experiencias.map((e, i) => (
            <Revela key={e.titulo} como="article" demora={i * 120} className="tarjeta">
              <Foto src={e.foto} descripcion={e.fotoDescripcion} className="tarjeta-foto" />
              <div className="tarjeta-cuerpo">
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
                <p className="precio">{e.precio}</p>
              </div>
            </Revela>
          ))}
        </div>
      </div>
    </section>
  )
}