import '@styles/productos.css'
import Footer from '../Inicio/Footer'
import SecondNavBar from '../Inicio/SecondNavBar'
import LottienAnimation from '../Nosotros/Lottie'
import LineasAnimation from '/public/lineas.json'
import Lineas from '../Inicio/Lineas'

const Productos = () => {
  return (
    <>
      <SecondNavBar/>
      <main className='main-wrapper-init'>
        <section className='banner'> 
          <h1>Todas las líneas</h1>
          <LottienAnimation alto={"500px"} ancho={"100%"} animacion={LineasAnimation}/>
        </section>
        <Lineas/>
      </main>
      <Footer/>    
    </>
  )
}

export default Productos