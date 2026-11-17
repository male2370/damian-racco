// Muestra la foto si existe; si no, una caja de color con la descripción.
export default function Foto({ src, descripcion, className = '' }) {
  if (src) {
    return (
      <div className={`foto ${className}`}>
        <img src={src} alt={descripcion} loading="lazy" />
      </div>
    )
  }
  return (
    <div className={`foto foto-vacia ${className}`}>
      <span>{descripcion}</span>
    </div>
  )
}