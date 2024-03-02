import React from 'react'
import { Check, Clock, Fan } from '../Icons/Iconst'

const ColbonMaderaHumeda = () => {
  return (
    <section className='features'>
      <h2>Características</h2>
        <ul className='grid-features'>
          <div>
            <span>
                <Fan/>
            </span>
            <p> Rápido agarre </p>
          </div>
          <div>
            <span>
                <Clock/>
            </span>
            <p> Tiempo abierto </p>
          </div>
          <div>
            <span>
                <Check/>
            </span>
            <p> Tiempo de prensado corto </p>
          </div>
        </ul>
    </section>
  )
}

export default ColbonMaderaHumeda