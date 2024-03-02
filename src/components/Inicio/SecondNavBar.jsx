import React, { useState } from 'react'
import '@styles/navBarDos.css'
import logoIcon from '@imagenes/logo.webp'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { ButtonAnimated } from './Button'


const SecondNavBar = () => {
    const [activeMenu,setActiveMenu] = useState(false)
  return (
    <>
    <header className='menu-nav'>
        <div className='btn-img'>
            <NavLink className='contenedor-icon-nav' to="/">
                <img src={logoIcon} alt="logo pvc color's" />
            </NavLink>
            <ButtonAnimated setMenu={setActiveMenu} menuValue={activeMenu} className='btn-menu-list'/>
        </div>
        <nav className={`navbar ${activeMenu ? "active" : ""}`}>
            <ul className={`ul-navbar`}>
                <NavLinks/>
            </ul>
            <ul className={`ul-navbar-mobile`}>
                <NavLinks/>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default SecondNavBar