import React, { useRef } from 'react'
import Footer from '../Inicio/Footer'
import MapChart from '../maps/Mapchart'
import '@styles/dudas.css'
import hombreDudas from '@imagenes/otros/hombreDudas.webp'
import { EmailContacto, Location, PhoneContacto } from '../Icons/Iconst'
import {Fade, Zoom} from 'react-reveal'
import SecondNavBar from '../Inicio/SecondNavBar'
import emailjs from '@emailjs/browser';
import bannerDudas from '@imagenes/otros/dudas.webp'
import { Toaster, toast } from 'sonner'
let publicKey = import.meta.env.VITE_PUBLICK_KEY
let template = import.meta.env.VITE_TEMPLATE
let name = import.meta.env.VITE_EMAIL_NAME
const Dudas = () => {
  const ref = useRef()
  const SendEmail = (e) => {
    e.preventDefault()
      emailjs
        .sendForm(name, template, ref.current, {
          publicKey: publicKey, 
        })
        .then(
          (resul) => {
            toast.success("Mensaje enviado exitosamente")
          },
          (error) => {
            toast.error("Ocurrió un error al enviar el mensaje")
          },
          );
    }
  return (
    <>
      <SecondNavBar/>
      <main className='main-wrapper-init'>
        <Zoom top cascade>
        <section className='banner-dudas' style={{minHeight: "550px"}}>
          <div className='second-animation'>
            <div className="title"> <h1 className='span-title'>¿Dudas?</h1> </div>
            <h2>Contáctanos para resolverlas.</h2>
          </div>
          <div className='img-seccion-dudas'>
            <img src={bannerDudas} alt="banner dudas" />
          </div>
        </section>
        </Zoom>
        <section className='data-businnes'>
          <div>
            <h1 className='title-contact'>Contáctanos</h1>
          </div>
          <section className='grid-contact'>
            <Fade left cascade>
            <div>
              <img src={hombreDudas} alt="img-contacto" style={{padding: "1em"}}/>
            </div>
            </Fade>
          <Fade bottom cascade>
            <section className='information'>
              <div>
                <article>
                  <h2>Contacto</h2>
                  <p>+57 311 872 7016 </p>
                  <p>+57 316 628 8243 </p>
                </article>
                <PhoneContacto/>
              </div>
              <div>
                <article>
                  <h2>Correo</h2>
                  <p>administracion@pvccolors.com </p>
                  <p>ventas@pvccolors.com </p>
                </article>
                <EmailContacto/>
              </div>
              <div>
                <article>
                  <h2>Punto físico</h2>
                  <p>Calle 11 # 9-29 barrio El llano, Cúcuta - Norte de santander</p>
                </article>
                <Location/> 
              </div>
            </section>
            </Fade>
            </section>
          </section>
        <section className='contacto'>
          <Fade top>
          <div className='form-contact'>
            <form ref={ref} onSubmit={SendEmail}>
              <h2 className='title-contact'>Buzón de mensajes</h2>
              <div>
              <input type="text" placeholder='Nombre' name='name'  />
              <input type="text" placeholder='Email' name='email' />
              <input type="text" placeholder='Mensaje' id='mensajes-gmail' name='message' />
              </div>
              <button>Enviar</button>
            </form>
          </div>
          </Fade>
          <MapChart/>
        </section>
      </main>
      <Toaster richColors/>
      <Footer/>
    </>
  )
}

export default Dudas