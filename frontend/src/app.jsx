import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experiencias from './components/Experiencias.jsx'
import Pasos from './components/Pasos.jsx'
import Ebooks from './components/Ebooks.jsx'
import Historia from './components/Historia.jsx'
import Reserva from './components/Reserva.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experiencias />
        <Pasos />
        <Ebooks />
        <Historia />
        <Reserva />
      </main>
      <Footer />
    </>
  )
}