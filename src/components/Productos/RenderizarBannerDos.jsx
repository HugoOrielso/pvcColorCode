import React from 'react'
import BannerArquitectionica from '@imagenes/secciones/arquitectonica/arquitectonicaBannerDos.jpg'
import BannerMaderas from '@imagenes/secciones/maderas/madera.jpg'
import { Zoom } from 'react-reveal'
import '@styles/secciones.css'

import maderaAnimation from '/public/madera.json'
import arquitecturaAnimation from '/public/arquitectura.json'
import industriaAnimation from '/public/industria.json'

import '@styles/secciones.css'
import LottienAnimation from '../Nosotros/Lottie'
const RenderizarBannerDos = ({categoria}) => {
    return(
        <Zoom>
        <section className='banner-dos'>
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
        </section>
        
        </Zoom>
    )
}

export default RenderizarBannerDos