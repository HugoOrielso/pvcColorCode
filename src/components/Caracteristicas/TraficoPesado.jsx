import React from 'react'
import { Chart, Clock, Diluible, Fan, Paint, Rain, Top } from '../Icons/Iconst'

const TraficoPesado = () => {
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
              <Fan/>
          </span>
          <p> Secado rápido </p>
        </div>
        <div>
          <span>
              <Rain/>
          </span>
          <p> Uso en ambientes exteriores  </p>
        </div>
        <div>
          <span>
              <Top/>
          </span>
          <p> Alto durabilidad </p>
        </div>
        <div>
          <span>
              <Diluible/>
          </span>
          <p> Diluible con xilol </p>
        </div>
        <div>
          <span>
              <Clock/>
          </span>
          <p> Alto rendimiento </p>
        </div>
        <div>
          <span>
              <Chart/>
          </span>
          <p> Alta capacidad de relleno </p>
        </div>
      </ul>
  </section>
  )
}

export default TraficoPesado