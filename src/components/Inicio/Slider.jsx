/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import '@styles/SliderTres.css'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import 'swiper/css/free-mode'
import { Fade } from 'react-reveal';
const Slider = () => {
    const sliderInfo = [
        {
            imagenProducto: "/images/slider/hombrePintando.webp",
            content: "Nuestro equipo de expertos en colores y diseño está aquí para guiarte en cada paso del camino. Desde la selección de tonos hasta la aplicación, te brindamos asesoramiento personalizado para garantizar que tu visión se haga realidad.",
            className: "hombrePintando"
        },
        
        {
            imagenProducto: "/images/slider/coloresRadiantes.webp",
            content: "Colores vibrantes vivos y emocionantes.",
            className: "coloresRadiantes"

        },
        {
            imagenProducto: "/images/slider/paleta.webp",
            content: "Variedad de colores a elegir, asesoramiento personalizado para escoger el color que mas  adapta en nuestros proyectos de remodelación",
            className: "paletaSlider"
        }
    ]
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={1000}
            freeMode={true}
            autoplay={{
                delay: 5500,
                pauseOnMouseEnter: true
              }}
            pagination={{
                clickable: true
            }}
            effect='coverflow'
            modules={[FreeMode,Pagination,Autoplay]}
            className='swiper'
        >
        {sliderInfo.map((slide,i)=>{
            return(
                <SwiperSlide key={i} >
                    <div className='main-slider'>
                        <Fade>
                        <img src={slide.imagenProducto} alt="imagen-main-slide" style={{maxWidth: "1300px", minHeight: "450px"}} className={slide.edit}/>
                        <div className={`main-slider-content ${slide.className}`}>
                            {
                                slide.className == "urlWeb" ? "": <h2>Pinturas PVC Color's</h2>
                            }
                            <p>{slide.content}</p>
                        </div>
                        </Fade>
                    </div>
                </SwiperSlide>
            )
        })}
        </Swiper>
    </>
  )
}

export default Slider