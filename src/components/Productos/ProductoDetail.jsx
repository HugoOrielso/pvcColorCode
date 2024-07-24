import { useParams } from 'react-router-dom'
import RenderizarBannerDos from './RenderizarBannerDos'
import RenderizarProductoDetail from './RenderizarProductoDetail'
import Footer from '../Inicio/Footer'
import CaracteristicasVinilos from './CaracteristicasVinilos'
import NavBar from '../Inicio/NavBar'
import '@styles/volverBtn.css'
import CromatoDeZinc from '../Caracteristicas/CromatoDeZinc'
import ColbonMaderaSeca from '../Caracteristicas/ColbonMaderaSeca'
import Esmalfast from '../Caracteristicas/Esmalfast'
import LacaMate from '../Caracteristicas/LacaMate'
import LacaBrillante from '../Caracteristicas/LacaBrillante'
import LacaCatalizada from '../Caracteristicas/LacaCatalizada'
import ColbonMaderaHumeda from '../Caracteristicas/ColbonMaderaHumeda'
import TraficoPesado from '../Caracteristicas/TraficoPesado'
import BaseAnticorrosiva from '../Caracteristicas/BaseAnticorrosiva'
import EsmalteSintetico from '../Caracteristicas/EsmalteSintetico'
const ProductoDetail = () => {
    const {categoria} = useParams()
    const {name} = useParams()
    
    const handleVolver = () => {
      if(categoria == "industrial"){
        location.href = "/lineas/industrial"
      }else if(categoria == "arquitectonica"){
        location.href = "/lineas/arquitectonica"
      }else if(categoria == "maderas"){
        location.href = "/lineas/maderas"
      }
      location.href = "/lineas"
    };
  return (
    <>
      <NavBar/>
      <main className='main-wrapper'>
        <RenderizarBannerDos categoria={categoria}/>
        <div>
          <button className='volver-btn' onPointerDown={handleVolver}>
            Volver
          </button>
        </div>
        <RenderizarProductoDetail name={name} categoria={categoria}/>
      </main>
      <hr />
      <section className='caracteristicas'>
        {name == "vinilo1" && <CaracteristicasVinilos/>}
        {name == "vinilo2" && <CaracteristicasVinilos/>}
        {name == "vinilo3" && <CaracteristicasVinilos/>}
        {name == "cromatoDeZinc" && <CromatoDeZinc/>}
        {name == "colbonMaderaSeca" && <ColbonMaderaSeca/>}
        {name == "esmalfast" && <Esmalfast/>}
        {name == "esmalfast" && <Esmalfast/>}
        {name == "lacaCatalizadaMate" && <LacaMate/>}
        {name == "lacaCatalizada" && <LacaBrillante/>}
        {name == "selladorCatalizado" && <LacaCatalizada/>}
        {name == "colbonMaderaHumeda" && <ColbonMaderaHumeda/>}
        {name == "traficoPesado" && <TraficoPesado/>}
        {name == "baseAnticorrosivoAlquidico" && <BaseAnticorrosiva/>}
        {name == "esmalteSinteticoEsmalcolor" && <EsmalteSintetico/>}
      </section>
      <Footer/>
    </>
  )
}

export default ProductoDetail