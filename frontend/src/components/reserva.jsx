import { useState } from 'react'
import { experiencias, marca } from '../data.js'
import Revela from './revela.jsx'

// El formulario no necesita servidor: arma el mensaje y abre WhatsApp
// con todo escrito, listo para enviar a Damián.
export default function Reserva() {
  const [datos, setDatos] = useState({
    nombre: '',
    fecha: '',
    invitados: '',
    experiencia: experiencias[0].titulo,
    mensaje: '',
  })
  const [error, setError] = useState('')

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
    setError('')
  }

  const enviar = (e) => {
    e.preventDefault()
    if (!datos.nombre.trim() || !datos.fecha || !datos.invitados) {
      setError('Completá nombre, fecha e invitados.')
      return
    }
    const texto =
      `Hola Damián! Soy ${datos.nombre}.\n` +
      `Quiero reservar: ${datos.experiencia}\n` +
      `Fecha: ${datos.fecha}\n` +
      `Invitados: ${datos.invitados}\n` +
      (datos.mensaje ? `Comentarios: ${datos.mensaje}` : '')
    window.open(`https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section id="reservar" className="banda banda-reserva">
      <div className="contenedor seccion dos-columnas">
        <Revela className="reserva-texto">
          <h2>Reservá tu fecha</h2>
          <p>Contanos qué celebrás y cuántos son. Te respondemos por WhatsApp con una propuesta de menú.</p>
        </Revela>

        <Revela como="form" demora={150} className="formulario" onSubmit={enviar} noValidate>
          <label>
            Nombre
            <input name="nombre" value={datos.nombre} onChange={cambiar} autoComplete="name" />
          </label>
          <label>
            Fecha
            <input name="fecha" type="date" value={datos.fecha} onChange={cambiar} />
          </label>
          <label>
            Invitados
            <input name="invitados" type="number" min="1" placeholder="8" value={datos.invitados} onChange={cambiar} />
          </label>
          <label>
            Experiencia
            <select name="experiencia" value={datos.experiencia} onChange={cambiar}>
              {experiencias.map((x) => <option key={x.titulo}>{x.titulo}</option>)}
            </select>
          </label>
          <label className="ancho-completo">
            Mensaje
            <textarea name="mensaje" rows="3" placeholder="Alergias, ocasión, ideas para el menú" value={datos.mensaje} onChange={cambiar} />
          </label>
          {error && <p className="error ancho-completo" role="alert">{error}</p>}
          <button type="submit" className="boton boton-dorado ancho-completo">Enviar por WhatsApp</button>
        </Revela>
      </div>
    </section>
  )
}