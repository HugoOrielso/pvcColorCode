import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '@styles/navbar.css'
import logoIcon from '@imagenes/logo.png'
import { Chevronright, Chevronrightoriginal } from '../Icons/Iconst'
import { ButtonAnimated } from './Button'
const NavBar = () => {
  const [activeMenu,setActiveMenu] = useState(false)
  return (
    <header className='header-page'>
      <div className='controls-nav'>
        <NavLink to="/" className="container-logo">
          <img src={logoIcon} alt="" />
        </NavLink>
        <ButtonAnimated setMenu={setActiveMenu} menuValue={activeMenu} className='btn-menu-list'/>
      </div>
      <nav className={`nav-menu ${activeMenu ? "active" : ""}`}>
        <ul className="menu-ul">  
          <li className='menu-item'>
            <div>
              <NavLink className="nav-title" to="/nosotros">Nosotros </NavLink>
            </div>
          </li>
          <li className='menu-item'>
            <NavLink className="nav-title a-product" to="/productos">
              <div className='presentacion'>
                Productos
                <Chevronright/>
              </div> 
              <div className='submenu-ul'>
                <li className='submenu-item'> <NavLink to="/lineas/industrial">Línea industrial <Chevronrightoriginal/></NavLink> 
                </li>
                <li className='submenu-item'> <NavLink to="/lineas/arquitectonica">Línea arquitectónica <Chevronrightoriginal/></NavLink>
                </li>
                <li className='submenu-item'> <NavLink to="/lineas/maderas">Línea maderas <Chevronrightoriginal/></NavLink>
                </li>
              </div>
            </NavLink>
          </li>
          <li className='menu-item'>
            <NavLink className="nav-title" to="/dudas">Dudas</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink className="nav-title">Distribuidores</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar