import { useEffect, useRef, useState } from 'react'

// Envuelve cualquier bloque para que aparezca subiendo cuando entra en pantalla.
// "demora" en milisegundos sirve para escalonar varias tarjetas.
export default function Revela({ children, demora = 0, como: Etiqueta = 'div', className = '', ...resto }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let espera
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          espera = setTimeout(() => setVisible(true), demora)
          observador.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observador.observe(el)
    return () => {
      observador.disconnect()
      clearTimeout(espera)
    }
  }, [demora])

  return (
    <Etiqueta
      ref={ref}
      className={`revela ${visible ? 'visible' : ''} ${className}`}
      {...resto}
    >
      {children}
    </Etiqueta>
  )
}