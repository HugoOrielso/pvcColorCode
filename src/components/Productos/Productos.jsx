import React from 'react'
import '@styles/productos.css'
import Footer from '../Inicio/Footer'
import LineasDos from '../Inicio/LineasDos'
import SecondNavBar from '../Inicio/SecondNavBar'
import LottienAnimation from '../Nosotros/Lottie'
import LineasAnimation from '/public/lineas.json'

const Productos = () => {
  return (
    <>
      <SecondNavBar/>
      <main>
        <section className='banner'> 
          <h1>Todas las líneas</h1>
          <LottienAnimation alto={"500px"} ancho={"100%"} animacion={LineasAnimation}/>
        </section>
        <LineasDos/>
      </main>
      <Footer/>    
    </>
  )
}

export default Productos