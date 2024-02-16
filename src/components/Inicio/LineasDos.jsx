import React, {  useRef } from 'react'
import '@styles/lineas.css'
import img1 from '@imagenes/lineaIndustrial.jpg'
import img2 from '@imagenes/secciones/maderas/madera.jpg'
import img3 from '@imagenes/arquitectonicaBanner.jpg'
import { NavLink } from 'react-router-dom'
import { Plus } from '../Icons/Iconst'

const LineasDos = () => {
  return (
    <>
      <section className='variedad'  >
        <h1>Descubre la <span className='resalto'>variedad </span>  que tenemos para tí</h1>
      </section>
      <section className='lineas' >
        <div className='box box1' >
          <img src={img1} alt="" className='img-linea'/>
          <NavLink className='linea' to="/lineas/industrial">
            <header>
              <h2>Línea industrial</h2>
            </header>
            <main>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam voluptatum odit minus! Blanditiis provident facilis unde pariatur ipsa. Ipsam, in cum. Rem numquam nam quis. Voluptate, veritatis! Non, et.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/></footer>
          </NavLink>
        </div>
        <div className='box box2' >
          <img src={img2} alt="" className='img-linea'/>
          <NavLink className='linea' to="/lineas/maderas">
            <header>
              <h2>Línea maderas</h2>
            </header>
            <main>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam voluptatum odit minus! Blanditiis provident facilis unde pariatur ipsa. Ipsam, in cum. Rem numquam nam quis. Voluptate, veritatis! Non, et.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/></footer>
          </NavLink>

        </div>
        <div className='box box3' >
          <img src={img3} alt="" className='img-linea'/>
          <NavLink className='linea' to="/lineas/arquitectonica">
            <header>
              <h2>Línea arquitectónica</h2>
            </header>
            <main>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam voluptatum odit minus! Blanditiis provident facilis unde pariatur ipsa. Ipsam, in cum. Rem numquam nam quis. Voluptate, veritatis! Non, et.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/> </footer>
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default LineasDos