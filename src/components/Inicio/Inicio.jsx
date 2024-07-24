/* eslint-disable react/no-unknown-property */
import Footer from './Footer'
import Lineas from './Lineas'
import SecondNavBar from './SecondNavBar'
import Slider from './Slider'

const Inicio = () => {
  return (
    <>
      <SecondNavBar/>
        <main className='main-wrapper-init'>
          <section style={{maxWidth: "1300px", width: "100%"}}>
            <Slider/>
          </section>
          <Lineas/>
          <div style={{height: "500px", width: "100%"}}>

          </div>
        </main>
        <Footer/>    

    </>
  )
}

export default Inicio