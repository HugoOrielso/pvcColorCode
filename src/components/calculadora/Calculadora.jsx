import NavBar from '../Inicio/NavBar'
import Footer from '../Inicio/Footer'
import info from '/public/calculadora.json'
import SelectProduct from './SelectProduct'

const Calculadora = () => {
  return (
    <>
        <NavBar/>
        <main className='main-wrapper' style={{minHeight: "800px"}}>
          <SelectProduct productos={info}/>
        </main>
        <Footer/>
    </>
  )
}

export default Calculadora