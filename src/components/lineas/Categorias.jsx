import { useParams } from 'react-router-dom'
import RenderizarSeccion from './RenderizarSeccion'
import Footer from '../Inicio/Footer'
import SecondNavBar from '../Inicio/SecondNavBar'
import SliderRecomendaciones from './SliderRecomendaciones'

const Categoria = () => {
  const {categoria} = useParams()

  return (
    <>
      <SecondNavBar/>
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