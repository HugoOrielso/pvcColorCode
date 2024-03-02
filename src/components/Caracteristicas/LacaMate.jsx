import React from 'react'
import { Check, Clock, Duro, Fan, Paint, Rain } from '../Icons/Iconst'

const LacaMate = () => {
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
              <Clock/>
          </span>
          <p> Alto rendimiento </p>
        </div>
        <div>
          <span>
              <Check/>
          </span>
          <p> Excelente calidad </p>
        </div>
        <div>
          <span>
              <Duro/>
          </span>
          <p> Alta dureza </p>
        </div>
      </ul>
    </section>
  )
}

export default LacaMate