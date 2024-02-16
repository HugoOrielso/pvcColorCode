import React from 'react'
import json from '/public/Info.json'
import '@styles/secciones.css'
import { Ficha } from '../Icons/Iconst'
import CardProduct from './Card'
import { Typewriter } from 'react-simple-typewriter'
import { Shapes } from '../shapes/Shapes'
import {Fade, Zoom, LightSpeed } from 'react-reveal'

const RenderizarProductoDetail = ({name, categoria}) => {
    const secciones = Object.values(json)
    const secccion = secciones.find(linea=> linea.categoria == categoria)
    const producto = secccion.productos.find(producto=>producto.url == name)
    const {imagenProducto, descripcionProducto , recomendaciones, nombreProducto, colores, presentacion, ficha, url} = producto
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
            <section className='colores'>
                <Shapes/>
                <Fade bottom cascade>
                <div className='container-colores'>
                <h1>Colores</h1>
                    <ul>
                    {colores ? colores.map((color,i)=>{
                        return(
                            <li key={i}>
                                {
                                    color == "white" ? <div  style={{backgroundColor:`${color}`, border: "solid .1px black"}} className='color'/> : 
                                    <div key={i} style={{backgroundColor:`${color}`}} className='color'/>
                                }
                            </li>
                        )
                    }) : <p>Sin colores</p>}
                    </ul>
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