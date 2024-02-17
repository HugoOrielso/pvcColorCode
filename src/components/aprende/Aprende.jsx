import React from 'react'
import SecondNavBar from '../Inicio/SecondNavBar'
import VerticalAccordion from './Acordeon'
import '@styles/aprende.css'
import LearnAnimation from '/public/learnTres.json'
import LottienAnimation from '../Nosotros/Lottie'
import Footer from '../Inicio/Footer'
const Aprende = () => {
  return (
    <>
        <SecondNavBar/>
        <main style={{maxWidth: "1300px", minHeight: "600px"}}>
          <section className='info-learn'>
            <VerticalAccordion/>
            <LottienAnimation alto={"100%"} ancho={"100%"} animacion={LearnAnimation}/>
          </section>
        </main>
        <Footer/>
    </>
  )
}

export default Aprende