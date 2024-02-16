import React from 'react'
import { useParams } from 'react-router-dom'
import RenderizarSeccion from './RenderizarSeccion'
import Footer from '../Inicio/Footer'
import SecondNavBar from '../Inicio/SecondNavBar'

const Categoria = () => {
  const {categoria} = useParams()

  return (
    <>
      <SecondNavBar/>
      <main>
        <RenderizarSeccion categoria={categoria} data-aos = "fade-right" />
      </main>
      <Footer/>
    </>
  )
}

export default Categoria