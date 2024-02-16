import React from 'react'
import '@styles/contacto.css'
import MapChart from '../maps/Mapchart'

const Contacto = () => {
  return (
    <section className='contacto'>
        <section className='form-contacto'>
            <form >
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Mensaje'/>
            </form>
        </section>
        <section className='map-contacto'>
            <MapChart/>
        </section>
    </section>
  )
}

export default Contacto