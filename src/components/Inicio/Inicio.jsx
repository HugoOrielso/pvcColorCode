/* eslint-disable react/no-unknown-property */
import Footer from './Footer'
import Lineas from './Lineas'
import NavBar from './NavBar'
import Slider from './Slider'

const Inicio = () => {
  return (
    <>
      <NavBar/>
        <main className='main-wrapper-init'>
          <section style={{maxWidth: "1300px", width: "100%"}}>
            <Slider/>
          </section>
          <Lineas/>
        </main>
        <Footer/>    

    </>
  )
}

export default Inicio