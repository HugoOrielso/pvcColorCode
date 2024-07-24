import NavBar from '../Inicio/NavBar'
import VerticalAccordion from './Acordeon'
import '@styles/aprende.css'
import Footer from '../Inicio/Footer'
import {Reveal, Zoom} from 'react-reveal'
import paletaColores from '@imagenes/otros/paletaDeColores.webp'

const Aprende = () => {
  return (
    <>
        <NavBar/>
        <main className='main-wrapper'>
          <section className='info-learn'>
            <Reveal bottom>
            <VerticalAccordion/>
            </Reveal>
            <Zoom  >
              <img src={paletaColores} alt="paleta" style={{width: "100%", paddingRight: ".5em", aspectRatio: 1.2}} />
            </Zoom>
          </section>
        </main>
        <Footer/>
    </>
  )
}

export default Aprende