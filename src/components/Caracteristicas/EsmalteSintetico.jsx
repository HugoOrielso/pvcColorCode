import React from 'react'
import { Check, Clock, Diluible, Fan, Paint, Rain, Top } from '../Icons/Iconst'

const EsmalteSintetico = () => {
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
              <Check/>
          </span>
          <p> Excelente acabado </p>
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
          <p> Diluible con varsol </p>
        </div>
        <div>
            
          <span>
              <Clock/>
          </span>
          <p> Alto rendimiento </p>
        </div>
      </ul>
  </section>
  )
}

export default EsmalteSintetico