import React from 'react'
import '@styles/secciones.css'
import json from '/public/Info.json'
import { NavLink } from 'react-router-dom';
import { Zoom } from 'react-reveal'
import LottienAnimation from '../Nosotros/Lottie';
import maderaAnimation from '/public/madera.json'
import arquitecturaAnimation from '/public/arquitectura.json'
import industriaAnimation from '/public/industria.json'
const RenderizarSeccion = ({ categoria }) => {
    const secciones = Object.values(json);
    if(secciones.length > 0){
    return (
        <section>
            {secciones.map((seccion, index) => (
                <div key={index} className='LineaCaegoria'>
                    {seccion.categoria == categoria && 
                        <>
                        <Zoom>
                            <section className='container-banner-imgs'>
                                {
                                    categoria == "arquitectonica" && 
                                    <section className='lineas-banner'>
                                        <LottienAnimation alto={"450px"} ancho={"100%"} animacion={arquitecturaAnimation}/>
                                        <div>
                                            <h1 className='span-title-arquitectura'>Línea </h1>
                                            <h1 className='span-title-arquitectura'>arquitectónica</h1>
                                            <h1 className='span-title-arquitectura mobile'>Línea arquitectónica</h1>
                                        </div>
                                    </section>
                                }                            
                                {
                                    categoria == "maderas" && 
                                    <section className='lineas-banner'>
                                        <LottienAnimation alto={"450px"} ancho={"100%"} animacion={maderaAnimation}/>
                                        <div>
                                            <h1 className='span-title-madera'>Línea</h1>
                                            <h1 className='span-title-madera'>maderas</h1>
                                            <h1 className='span-title-madera mobile'> Línea maderas</h1>
                                        </div>
                                    </section>
                                }                              
                                {
                                    categoria == "industrial" && 
                                    <section className='lineas-banner'>
                                        <LottienAnimation alto={"450px"} ancho={"100%"} animacion={industriaAnimation}/>
                                        <div>
                                            <h1 className='span-title-industrial'>Línea</h1>
                                            <h1 className='span-title-industrial'>industrial</h1>
                                            <h1 className='span-title-industrial mobile'>Línea industrial</h1>
                                        </div>
                                    </section>
                                }                          
                            </section>
                            </Zoom>
                            <hr />
                            <section >
                                <ul className='productos-categorias'>
                                    {seccion?.productos.map((producto, index)=>{
                                        return(
                                            <NavLink key={index} className='producto' to={`/lineas/${categoria}/producto/${producto.url}`}>
                                                <Zoom bottom cascade>
                                                    <img src={producto?.imagenProducto} alt={producto.nombreProducto} />
                                                </Zoom>
                                                <article className='info-producto'>
                                                    <h4>{producto?.nombreProducto}</h4>
                                                    <p>{producto?.descripcionProducto}</p>
                                                </article>
                                            </NavLink>
                                        )
                                    })}
                                </ul>
                            </section>
                        </>
                    }
                </div>
            ))}
        </section>
    );
    }
}

export default RenderizarSeccion;
