import React from 'react'
import '@styles/productos.css'
import { Water, Paint, Rain, Esplash, Chart, CalendarCheck } from '../Icons/Iconst'
import Aire from '@imagenes/aire.png'
const CaracteristicasVinilos = () => {
  return (
    <section className='features'>
      <h2>Características</h2>
        <ul className='grid-features'>
          <div>
            <span>
              <Paint/>

            </span>
            <p>Excelente retención de color.</p>
          </div>
          <div>
            <span>
              <CalendarCheck/>
            </span>
            <p>Alto rendimiento.</p>
          </div>
          <div>
            <img src={Aire} alt="" />
            <p>Bajo contenido de VOC.</p>
          </div>
          <div>
            <span>
            <Esplash/>
            </span>
            <p>Bajo salpique.</p>
          </div>
          <div>
            <span>
            <Water/>
            </span>
            <p>Diluible con agua.</p>
          </div>
          <div>
            <span>
            <Rain/>
            </span>
            <p>Uso en ambientes interior y exteriores.</p>
          </div>
          <div>
            <span>
            <Chart/>
            </span>
            <p>Alto cubrimiento.</p>
          </div>
        </ul>
    </section>
  )
}

export default CaracteristicasVinilos