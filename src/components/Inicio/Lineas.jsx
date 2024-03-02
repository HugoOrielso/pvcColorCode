import React, {  useRef } from 'react'
import '@styles/lineas.css'
import img1 from '@imagenes/industria.webp'
import img2 from '@imagenes/madera.webp'
import img3 from '@imagenes/arquitectura.webp'
import img4 from '@imagenes/pinturaSpray.webp'
import { NavLink } from 'react-router-dom'
import { Plus } from '../Icons/Iconst'
import { Fade, Zoom} from 'react-reveal'

const Lineas = () => {
  return (
    <>
      <Zoom cascade>
      <section className='variedad' >
        <h1 style={{color: "white"}}>PRODUCTOS</h1>
      </section>
      </Zoom>
      <section className='lineas' >
        <Zoom cascade bottom>
        <div className='box box1' >
          <Fade top>
            <img src={img1} alt="imagen línea industrial" className='img-linea' />
          </Fade>
          <NavLink className='linea' to="/lineas/industrial">
            <header>
              <h2>Línea Industrial</h2>
            </header>
            <main>
              <p>Decoración, protección y mantenimiento de máquinas e industria en general.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/></footer>
          </NavLink>
        </div>
        </Zoom>
        <Zoom cascade bottom>
        <div className='box box2' >
          <Fade top>
            <img src={img2} alt="imagen línea de maderas" className='img-linea'/>
          </Fade>
          <NavLink className='linea' to="/lineas/maderas">
            <header>
              <h2>Línea Maderas</h2>
            </header>
            <main>
              <p>Embellece muebles y superficies de madera.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/></footer>
          </NavLink>
        </div>
        </Zoom>
        <Zoom cascade bottom>
        <div className='box box3'>
          <Fade top>
            <img src={img3} alt="imagen línea arquitectónica" className='img-linea'/>
          </Fade>
          <NavLink className='linea' to="/lineas/arquitectonica">
            <header>
              <h2>Línea Arquitectónica</h2>
            </header>
            <main>
              <p>Decora tu hogar oficina y edificios.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/> </footer>
          </NavLink>
        </div>
        </Zoom>
        <Zoom cascade bottom>

        <div className='box box3'>
          <Fade top>
            <img src={img4} alt="imagen otras líneas" className='img-linea'/>
          </Fade>
          <NavLink className='linea' to="/lineas/otros">
            <header>
              <h2>Otras Líneas</h2>
            </header>
            <main>
              <p>Decora tu hogar oficina y edificios.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/> </footer>
          </NavLink>
        </div>  
        </Zoom>
      </section>
    </>
  )
}

export default Lineas