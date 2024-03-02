import React from 'react'
import json from '/public/Info.json'
import '@styles/secciones.css'
import '@styles/buttonFicha.css'
import CardProduct from './Card'
import { Typewriter } from 'react-simple-typewriter'
import { Shapes } from '../shapes/Shapes'
import {Fade, Zoom, LightSpeed } from 'react-reveal'
import { NavLink } from 'react-router-dom'

const RenderizarProductoDetail = ({name, categoria}) => {
    const secciones = Object.values(json)
    const secccion = secciones.find(linea=> linea.categoria == categoria)
    const producto = secccion.productos.find(producto=>producto.url == name)
    const {imagenProducto, descripcionProducto , recomendaciones, nombreProducto, colores, presentacion, ficha, coloresDos} = producto
    return (
        <section className='presentacion-general-details'>
            <section className='producto-detail'>
                <Zoom left >
                <div>
                    <CardProduct  imgUrl={imagenProducto}/>
                </div>
                </Zoom>
                <LightSpeed right>
                <div className='info-producto-detail'>
                    <div>
                        <h2>{nombreProducto}</h2>
                        <div>
                            <p>{descripcionProducto}</p>
                        </div>           
                    </div>
                    <div>
                        <h2>Recomendaciones de uso</h2>
                        <div>
                            <p>{recomendaciones}</p>
                        </div>
                    </div>
                </div>
                </LightSpeed>
            </section>
            <div className='con-btn'>
                <NavLink className="btn-ficha-t" to={ficha} target='_blank' title={`Ficha técnica ${nombreProducto}`}>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg> 
                    <span className='text'>Ficha técnica</span>
                </NavLink>
            </div>
            <section className='colores'>
                <Shapes/>
                <Fade bottom cascade>
                <div className='container-colores'>
                <h1>Colores</h1>
                    {
                        coloresDos ? 
                        <div className='div-colores'>
                            {coloresDos.map((color,i)=>{
                                return(
                                    <div key={i} >
                                        <div style={{textAlign: "center"}}>
                                        <h3>{color.name}</h3>
                                        </div>
                                        <div className='colores-grid'>
                                            {color.colores.map((color,i)=>{
                                                if(color == "white"){
                                                    return(
                                                        <div className='color' style={{border: ".1px solid black", background: color}}/>
                                                    )
                                                }
                                                return(
                                                    <div className='color' style={{background: color }}/>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    : null}
                    {colores ? 
                        <div className='colores-grid'>
                            {colores.map((color,i)=>{
                                if(color == "white"){
                                    return(
                                        <div className='color' key={i} style={{border: ".1px solid black", background: color}}/>
                                    )
                                }
                                return(
                                    <div key={i} className='color' style={{background: color }}/>
                                )
                            })}
                        </div> 
                    : null }

                    {!colores && !coloresDos ? <p>Sin colores</p> : null}
                </div>
                </Fade>
            </section>
            <LightSpeed left>
            <section className='container-presentaciones'>
                <div className='presentacion-producto'>
                  <div>
                    <h1>Presentación </h1>
                    <h1><span>del producto</span></h1>
                  </div>
                  <div style={{color: "green"}}>
                    <p>
                    <Typewriter
                    words={presentacion} loop={100} cursor cursorStyle='<' typeSpeed={100} deleteSpeed={50} delaySpeed={1000} />
                    </p>
                  </div>
                </div>
            </section>
            </LightSpeed>
        </section>
    )
}

export default RenderizarProductoDetail