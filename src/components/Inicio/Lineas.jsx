import React, {  useRef } from 'react'
import '@styles/lineas.css'
import img1 from '@imagenes/lineaIndustrial.jpg'
import img2 from '@imagenes/secciones/maderas/madera.jpg'
import img3 from '@imagenes/arquitectonicaBanner.jpg'
import { NavLink } from 'react-router-dom'
import { Plus } from '../Icons/Iconst'
import CustomHook from '../../redux/CustomHook'

const Lineas = () => {
  const divs = useRef([])
  CustomHook(divs)
  return (
    <>
      <section className='variedad' ref={(el)=>{el && divs.current.push(el)}} >
        <h1>Descubre la <span className='resalto'>variedad </span>  que tenemos para tí</h1>
      </section>
      <section className='lineas' >
        <div className='box box1' ref={(el)=>{el && divs.current.push(el)}}>
          <img src={img1} alt="" className='img-linea'/>
          <NavLink className='linea' to="/lineas/industrial">
            <header>
              <h2>Línea industrial</h2>
            </header>
            <main>
              <p>Embellecimiento, protección, mantenimiento de máquinas y útiles industriales.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/></footer>
          </NavLink>
        </div>
        <div className='box box2' ref={(el)=>{el && divs.current.push(el)}}>
          <img src={img2} alt="" className='img-linea'/>
          <NavLink className='linea' to="/lineas/maderas">
            <header>
              <h2>Línea maderas</h2>
            </header>
            <main>
              <p>Protege, mejora, y embellece superficies de madera.</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/></footer>
          </NavLink>

        </div>
        <div className='box box3' ref={(el)=>{el && divs.current.push(el)}}>
          <img src={img3} alt="" className='img-linea'/>
          <NavLink className='linea' to="/lineas/arquitectonica">
            <header>
              <h2>Línea arquitectónica</h2>
            </header>
            <main>
              <p>Todo lo relacionado con decoración de interiores y tu hogar</p>
            </main>
            <footer className='footer-section'>Ver más <Plus/> </footer>
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default Lineas