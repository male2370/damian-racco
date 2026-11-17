import { pasos } from '../data.js'
import Revela from './revela.jsx'

export default function Pasos() {
  return (
    <section className="contenedor seccion">
      <Revela como="h2" className="centrado">Así de simple</Revela>
      <div className="grilla grilla-3">
        {pasos.map((p, i) => (
          <Revela key={p.titulo} demora={i * 120} className="paso">
            <span className="paso-numero">{i + 1}</span>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </Revela>
        ))}
      </div>
    </section>
  )
}