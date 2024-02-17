import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Chevronright } from '../Icons/Iconst'

const NavLinks = () => {
    const [heading,setHeading] = useState(false)
    const links = [
        {name: "Nosotros", link: "nosotros"},
        {name: "Dudas", link: "dudas"},
        {name: "Líneas",link: "lineas", subMenu:true,sublinks:[{
            sublink:[
                {name: "Todas", link: "lineas"},
                {name: "Maderas", link: "maderas"},
                {name: "Industrial", link: "industrial"},
                {name: "Arquitectónica", link: "arquitectonica"}
            ]
        }]},
        {name: "Aprende con pvc", link: "aprende"},
        {name: "Distribuidores", link: "distribuidores"}
    ]
  return (
    <>
        {
            links.map((link, i)=>(
                <li key={i} className='li-navbar'>
                    <NavLink className="a-navbar" to={`/${link.link}`}>{link.name}</NavLink>
                    {link.subMenu && (
                        <div className='absolute-submenu'>
                            <div className='figure'>
                                <div className='triangle'></div>
                            </div>
                            <div className='bg-absolute'>
                            {
                                link.sublinks.map(sublink=>{
                                    return(
                                        sublink.sublink.map((link,i)=>{
                                            return(
                                                <li key={i}>
                                                    <NavLink to={link.name == "Todas" ? `/lineas` : `/lineas/${link.link}`} className="lineasCategorias">
                                                        {link.name}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    )

                                })
                            }     
                            </div>   
                        </div>
                    )}
                </li>
            ))
        }
        {
            links.map((link, i)=>(
                <li key={i} className='li-navbar-mobile'>
                    <NavLink onPointerDown={()=>{ link.name == "Líneas" ? setHeading(!heading) : setHeading(false)}} className="a-navbar-mobile" to={link.name == "Líneas" ? '#' : `/${link.link}`} >{link.name} {link.name == "Líneas" ? <Chevronright/> : null }  </NavLink>
                    {link.subMenu && (
                        <div className={`absolute-submenu-mobile ${heading ? "active" : ""}`}>
                            <div className='figure-mobile'>
                                <div className='triangle-mobile'></div>
                            </div>
                            <div className={`bg-absolute-mobile ${heading ? "active" : ""}`}>
                            {
                                link.sublinks.map(sublink=>{
                                    return(
                                        sublink.sublink.map((link,i)=>{
                                            return(
                                                <li key={i}>
                                                    <NavLink to={link.name == "Todas" ? `/lineas` : `/lineas/${link.link}`} className="lineasCategorias">
                                                        {link.name}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    )

                                })
                            }     
                            </div>   
                        </div>
                    )}
                </li>
            ))
        }
    </>
  )
}

export default NavLinks