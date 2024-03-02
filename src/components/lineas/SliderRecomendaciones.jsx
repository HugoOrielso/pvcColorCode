import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import '@styles/secondSlider.css'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import 'swiper/css/free-mode'
import { Link } from 'react-router-dom';
const SliderRecomendaciones = ({categoria}) => {
    const sliderInfo = [
        {
            nombreProducto:"Vinilo tipo 1",
            imagenProducto: "/images/secciones/arquitectonica/productos/viniloTipoUno.webp",
            content: "Pintura vinil-acrílica diluible con agua de acabado mate, altocubrimiento, resistencia a la intemperie y excelente lavabilidad con una amplia gama de colores: blancos, colores pasteles y concentrados.",
            url: "vinilo1",
        },
        {
            nombreProducto:"Vinilo tipo 2",
            imagenProducto: "/images/secciones/arquitectonica/productos/viniloTipoDos.webp",
            content: "Pintura vinil-acrílica diluidle con agua de acabado mate, muy buen cubrimiento y lavabilidad. Amplia gama de colores: blancos, pasteles y concentrados.",
            url: "vinilo2",
        },
        {
            nombreProducto:"Vinilo tipo 3",
            imagenProducto: "/images/secciones/arquitectonica/productos/viniloTipoTres.webp",
            content: "Pintura vinílica diluible con agua de acabado mate y muy buen cubrimiento.",
            url: "vinilo3",
        },
        {
            nombreProducto:"Base anticorrosivo alquídico",
            imagenProducto: "/images/secciones/arquitectonica/productos/anticorrosivo.webp",
            content: "Producto elaborado con resinas alquídicas de excelente calidad y pigmentos anticorrosivos seleccionados.",
            url: "baseAnticorrosivoAlquidico",
        },
    ]

  return (
    <>
        <h1 className='span-title-slider'>PVC recomienda</h1>
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
                        <div className='content-slide'>
                            <img src={slide.imagenProducto} alt={slide.nombreProducto} />
                            <div className='infor-slide'>
                                <h1>{slide.nombreProducto}</h1>
                                <div className='content-slide-p'>
                                    <p>{slide.content}</p>
                                </div>
                                <Link to={`/lineas/${categoria}/producto/${slide.url}`} class="button-mas-slide">
                                  Ver más
                                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
                                  </svg>
                                </Link>
                            </div>
                        </div>    
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </>
  )
}

export default SliderRecomendaciones