import React from 'react'
import SecondNavBar from '../Inicio/SecondNavBar'
import Footer from '../Inicio/Footer'
import VerticalAccordion from './Acordeon'

const Aprende = () => {
  return (
    <>
        <SecondNavBar/>
        <main style={{maxWidth: "1300px"}}>
            <VerticalAccordion/>
        </main>
        <Footer/>
    </>
  )
}

export default Aprende