import { useState } from 'react'
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
        <div style={{maxWidth:"1450px", display: "flex", justifyContent: "space-between", width: "100%"}}>
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

        </div>
    </header>
    </>
  )
}

export default SecondNavBar