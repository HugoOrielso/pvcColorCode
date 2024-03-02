import React from 'react'
import SecondNavBar from '../Inicio/SecondNavBar'
import Footer from '../Inicio/Footer'
import info from '/public/calculadora.json'
import SelectProduct from './SelectProduct'

const Calculadora = () => {
  return (
    <>
        <SecondNavBar/>
        <main className='main-wrapper' style={{minHeight: "500px"}}>
          <SelectProduct productos={info}/>
        </main>
        <Footer/>
    </>
  )
}

export default Calculadora