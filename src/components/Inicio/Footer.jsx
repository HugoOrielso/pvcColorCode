import '@styles/footer.css'
import logoIcon from '@imagenes/logo.webp'
import { Email, Facebook, Geolocalitation, Instagram, Telefono, Whatsapp } from '../Icons/Iconst'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>

      <footer  className='footer'>
        <div className='pie-pag'>
          <section className='logo-footer' >
            <img src={logoIcon} alt="logo pvc colors" />
          </section>
          <section className='contacto-footer'>
            <header>
              <h3>Contáctanos</h3>
            </header>
            <main>
              <div className='direccion'>
                <p> <span className='circle'><Geolocalitation/></span>Calle 11 # 9-29 barrio El llano, Cúcuta - Norte de santander </p> 
              </div>
              <div className='telefono'>
                <p> <span className='circle'><Telefono/></span> 3164666866 </p>
                <p> <span className='circle'><Telefono/></span> 3166288243 </p>
              </div>  
              <div className='correo'>
                <p> <span className="circl"> <Email/> </span> administracion@pvccolors.com</p>
                <p> <span className="circl"> <Email/> </span> ventas@pvccolors.com</p>
              </div>
            </main>
          </section>
          <section className='follow-footer'>
            <div className='container-icons-title'>
              <h3>Redes</h3>
              <div>
                <div className='iconst-social'>
                  <NavLink to="https://www.facebook.com/pinturas.pvccolors" target='_blank' title='Facebook PVC colors'><Facebook/></NavLink> 
                  <NavLink title='Instagram PVC colors' to="https://www.instagram.com/pinturas_pvccolors/" target='_blank'  ><Instagram/></NavLink>
                  <NavLink  to="https://wa.me/573118727016?text=Hola%20quiero%20conocer%20m%C3%A1s%20acerca%20de%20las%20pinturas." title='Whatsapp PVC colors'target='_blank'  ><Whatsapp/></NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer