import React from 'react'
import { Chart, Clock, Diluible, Fan, Flexibility, Forbiden, Mate, Paint } from '../Icons/Iconst'

const CromatoDeZinc = () => {
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
                <Forbiden/>
            </span>
            <p> Inhibidor de óxido </p>
          </div>
          <div>
            <span>
                <Fan/>
            </span>
            <p> Secado rápido </p>
          </div>
          <div>
            <span>
                <Mate/>
            </span>
            <p> Acabado mate </p>
          </div>
          <div>
            <span>
                <Diluible/>
            </span>
            <p> Diluible con xilol </p>
          </div>
          <div>
            <span>
                <Flexibility/>
            </span>
            <p> Buena flexibilidad </p>
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
            <p> Alto cubrimiento </p>
          </div>
        </ul>
    </section>
  )
}

export default CromatoDeZinc