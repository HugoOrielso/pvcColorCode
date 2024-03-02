import React from 'react'
import { Aplicacion, CalendarCheck, Clock, Coin, Fan, Flexibility, Paint, Water } from '../Icons/Iconst'
import Aire from '@imagenes/aire.webp'

const ColbonMaderaSeca = () => {
  return (
    <section className='features'>
      <h2>Características</h2>
        <ul className='grid-features'>
          <div>
            <span>
                <Paint/>
            </span>
            <p> Excelente adherencia </p>
          </div>
          <div>
            <span>
                <img src={Aire} alt="imagen icon" />
            </span>
            <p> Bajo contenido de VOC </p>
          </div>
          <div>
            <span>
                <Flexibility/>
            </span>
            <p> Buena flexibilidad </p>
          </div>
          <div>
            <span>
                <Coin/>
            </span>
            <p> Producto económico </p>
          </div>
          <div>
            <span>
                <Clock/>
            </span>
            <p> Alto rendimiento </p>
          </div>
          <div>
            <span>
                <CalendarCheck/>
            </span>
            <p> Alta durabilidad </p>
          </div>
          <div>
            <span>
                <Fan/>
            </span>
            <p> Secado rápido </p>
          </div>
          <div>
            <span>
                <Water/>
            </span>
            <p> Diluible con agua </p>
          </div>
          <div>
            <span>
                <Aplicacion/>
            </span>
            <p> Facil aplicación </p>
          </div>
        </ul>
    </section>
  )
}

export default ColbonMaderaSeca