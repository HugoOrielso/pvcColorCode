import React from 'react'
import Footer from './Footer'
import Lineas from './Lineas'
import SecondNavBar from './SecondNavBar'
import Slider from './Slider'

const Inicio = () => {
  return (
    <>
      <SecondNavBar/>
      <main className='main-wrapper-init'>
        <Slider/>
        <Lineas/>
      </main>
      <Footer/>    
    </>
  )
}

export default Inicio