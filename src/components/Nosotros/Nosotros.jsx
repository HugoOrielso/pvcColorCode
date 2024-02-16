import React from 'react'
import Footer from '../Inicio/Footer'
import LottieAnimation from './Lottie.jsx'
import '@styles/nosotros.css'
import pinturaAnimacion from "/public/pinturaAnimacion.json";
import misionAnimacion from "/public/mision.json";
import visionAnimacion from "/public/vision.json";

import { Fade, Zoom, Roll } from 'react-reveal'
import SecondNavBar from '../Inicio/SecondNavBar.jsx'
const Nosotros = () => {
  return (
    <>
      <SecondNavBar/>
      <main>
        <section className='title-nosotros'>
          <h1 className="title">¿Quiénes <span className='span-title-nosotros'>Somos?</span> </h1>
        </section>
        <section className='presentacion-nosotros'>
          <div className='infor-presentacion'>
            <Fade>
            <div>
              <LottieAnimation alto={"100%"} ancho={"90%"} animacion={pinturaAnimacion}/>
            </div>
            </Fade>
            <div>
              <Zoom top cascade> 
                <h2>DISTRIBUIDORA PVC COLORS S.A.S</h2>
              </Zoom> 
              <Zoom left cascade>
              <p>Empresa Colombiana  ubicada en la ciudad de Cúcuta, Norte de Santander, dedicada a la fabricación, LINEA ARQUITECTONICA (Vinilos para exterior e interir, Esmalte Sintetico, Base Anticorrosiva, Pasta Fina, Pasta Gruesa), para acabados de interior y exterior en la industria de la construcción. LINEA MADERABLE (Colbón, Sellador Catalizado). </p>
              </Zoom>
              <Roll bottom>
              <p>Nos ponemos en contacto para Presentarnos como Proveedores y futuros aliados en sus negocios, también tengan el placer de conocer nuestros productos y beneficios que tenemos para el sector de la construcción  </p>
              </Roll>
            </div>
          </div>
          <div className='mision-vision'>
            <Zoom top cascade>
            <div className="grid-m-v">
              <div >
                <LottieAnimation alto={"100%"} ancho={"90%"} animacion={misionAnimacion}/>
              </div>  
              <div >
                <h2>Misión</h2>
                <p>Nuestra misión es ser líderes en la industria de pinturas, ofreciendo productos de alta calidad y soluciones,  innovadondo y, satisfaciendo  las necesidades de nuestros clientes en el sector arquitectónico.
                </p>
                <p>Nos comprometemos a proporcionar pinturas, masillas, vinilos, esmaltes, barnices, pegamentos para ensamblar madera, lacas catalizadas y selladores catalizados que cumplan con los más altos estándares de rendimiento, durabilidad y sostenibilidad.</p>
                <p>A través de la excelencia en la fabricación y el compromiso,  buscando ser reconocidos como un socio confiable y preferido por arquitectos, constructores y, profesionales de la pintura en todo el mundo.</p>
              </div>
            </div>
            </Zoom>
            <Zoom bottom cascade>
            <div className='grid-m-v'>
              <div >
                <LottieAnimation alto={"100%"} ancho={"90%"} animacion={visionAnimacion}/>
              </div>
              <div className='text'>
                <h2>Visión</h2>
                <p>Nuestra visión es convertirnos en un punto referente de excelencia y calidad, en la industria de pinturas, siendo reconocidos a nivel nacional e internacional por nuestros productos innovadores y soluciones de vanguardia.</p>
                <p>Buscamos ser líderes en el mercado, superando las expectativas de nuestros clientes y estableciendo relaciones duraderas basadas en la confianza y la satisfacción.</p>
                <p>Nos esforzamos por ser una empresa sostenible, comprometida con el cuidado del medio ambiente y la responsabilidad social.</p>
                <p>A través de la inversión en investigación y desarrollo, la mejora continua y el talento de nuestro equipo, aspiramos a marcar la diferencia en la industria de la pintura.</p>
              </div>

            </div>
            </Zoom>

          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Nosotros