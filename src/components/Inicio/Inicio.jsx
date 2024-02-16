import React from 'react'
import Slider from './Slider'
import Footer from './Footer'
import Lineas from './Lineas'
import SecondNavBar from './SecondNavBar'

const Inicio = () => {
  return (
    <>
      <SecondNavBar/>
      <main className='main-wrapper'>
        <Slider/>
        <Lineas/>
      </main>
      <Footer/>    
    </>
  )
}

export default Inicio