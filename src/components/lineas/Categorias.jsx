import { useParams } from 'react-router-dom'
import RenderizarSeccion from './RenderizarSeccion'
import Footer from '../Inicio/Footer'
import NavBar from '../Inicio/NavBar'
import SliderRecomendaciones from './SliderRecomendaciones'

const Categoria = () => {
  const {categoria} = useParams()

  return (
    <>
      <NavBar/>
      <main className='main-wrapper'>
        <RenderizarSeccion categoria={categoria} data-aos = "fade-right" />
      </main>
        <section className='container-slider-recomendaciones'>
          <SliderRecomendaciones categoria={categoria}/>
        </section>
      <Footer/>
    </>
  )
}

export default Categoria