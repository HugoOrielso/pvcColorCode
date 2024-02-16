import React from 'react'
import { useParams } from 'react-router-dom'
import RenderizarBannerDos from './RenderizarBannerDos'
import RenderizarProductoDetail from './RenderizarProductoDetail'
import Footer from '../Inicio/Footer'
import CaracteristicasVinilos from './CaracteristicasVinilos'
import {Fade, Zoom} from 'react-reveal'
import SecondNavBar from '../Inicio/SecondNavBar'

const ProductoDetail = () => {
    const {categoria} = useParams()
    const {name} = useParams()
  return (
    <>
      <SecondNavBar/>
      <main>
        <RenderizarBannerDos categoria={categoria}/>
        <RenderizarProductoDetail name={name} categoria={categoria}/>
      </main>
      <hr />
      <section className='caracteristicas'>
        <CaracteristicasVinilos/>
      </section>
      <Footer/>
    </>
  )
}

export default ProductoDetail