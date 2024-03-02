import React from 'react'
import SecondNavBar from '../Inicio/SecondNavBar'
import VerticalAccordion from './Acordeon'
import '@styles/aprende.css'
import Footer from '../Inicio/Footer'
import {Reveal, Zoom} from 'react-reveal'
import paletaColores from '@imagenes/otros/paletaDeColores.webp'

const Aprende = () => {
  return (
    <>
        <SecondNavBar/>
        <main className='main-wrapper'>
          <section className='info-learn'>
            <Reveal bottom>
            <VerticalAccordion/>
            </Reveal>
            <Zoom  >
              <img src={paletaColores} alt="paleta" style={{width: "100%", paddingRight: ".5em"}} />
            </Zoom>
          </section>
        </main>
        <Footer/>
    </>
  )
}

export default Aprende