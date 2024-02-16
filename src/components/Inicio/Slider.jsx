import React, { useEffect, useRef, useState } from 'react'
import '@styles/slider.css'
import img1 from '@imagenes/personas.jpg'
import img2 from '@imagenes/casas.webp'
import img3 from '@imagenes/naturaleza.png'
import { Next, Prev } from '../Icons/Iconst'
import CustomHook from '../../redux/CustomHook'
const Slider = () => {
    const divs = useRef([])
    CustomHook(divs)
    const carouselDom = useRef(null)
    const listItemDom = useRef(null)
    const thumbnailDom = useRef(null)
    function nextDom(){
        showSlider('next')
    }
    function prevDom(){
        showSlider('prev')
    }
    let timeRunning = 3000
    let timeAutoNext = 7000
    let runTimeOut;


    const runAutoRun = () => {
        nextDom();
    }; 
    function showSlider(type){
        let itemSlider = document.querySelectorAll('.carousel .list .item')
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

        if(type === 'next'){
            listItemDom.current.appendChild(itemSlider[0])
            thumbnailDom.current.appendChild(itemThumbnail[0])
            carouselDom.current.classList.add('next')
        }else{
            let positionLastItem = itemSlider.length - 1
            listItemDom.current.prepend(itemSlider[positionLastItem])
            thumbnailDom.current.prepend(itemThumbnail[positionLastItem])
            carouselDom.current.classList.add('prev')
        }
        clearTimeout(runTimeOut)
        runTimeOut = setTimeout(()=>{
            carouselDom.current.classList.remove('next')
            carouselDom.current.classList.remove('prev')
        }, timeRunning)
        clearTimeout(runAutoRun)
        
    }

  return (
    < >
        <div className='carousel' ref={carouselDom} >
            <div className="list" ref={listItemDom}>
                <div className="item" >
                    <img src={img1} alt="equipo" />
                    <div className="content">
                        <div className="title">Pinturas <span className='span-title'>PVC colors</span> </div>
                        <div className="des" style={{color: "black", fontWeight: "500"}}>
                        Nuestro equipo de expertos en colores y diseño está aquí para guiarte en cada paso del camino. Desde la selección de tonos hasta la aplicación, te brindamos asesoramiento personalizado para garantizar que tu visión se haga realidad.
                        </div>
                        {/* <div className="buttons">
                            <button>see more</button>
                        </div> */}
                    </div>
                </div>
                <div className="item">
                    <img src={img2} alt="" />
                    <div className="content">
                        <div className="title">Pinturas <span className='span-title'>PVC colors</span> </div>
                        <div className="des" style={{color: "black", fontWeight: "500"}}>
                        Mantén tus espacios impecables con nuestra tecnología anti manchas. Nuestras pinturas son resistentes a las marcas diarias, facilitando la limpieza y garantizando que tus paredes se mantengan frescas y hermosas a lo largo del tiempo.
                        </div>
                        {/* <div className="buttons">
                            <button>see more</button>
                        </div> */}
                    </div>
                </div>
                <div className="item">
                    <img src={img3} alt="naturaleza" style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
                    <div className="content">
                        <div className="title">Pinturas <span className='span-title'>PVC colors</span> </div>
                        <div className="des" style={{color: "black", fontWeight: "500"}}>
                        Comprometidos con el medio ambiente, nuestras pinturas están formuladas con componentes respetuosos con la naturaleza. Pintar con nosotros no solo embellece tu hogar, sino que también contribuye a un futuro más sostenible.
                        </div>
                        {/* <div className="buttons">
                            <button>see more</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="thumbnail" ref={thumbnailDom}>
                <div className="item">
                    <img src={img1} alt="" />
                    <div className="content">
                        <div className="title">
                            Equipo
                        </div>
                        <div className="des">
                            </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img2} alt="" />
                    <div className="content">
                        <div className="title">
                            Espacios
                        </div>
                        <div className="des">
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img3} alt="" />
                    <div className="content">
                        <div className="title">
                            Naturaleza
                        </div>
                        <div className="des">
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrows" >
                {/* <button id="prev" onPointerDown={prevDom}>
                    <Prev/>
                </button> */}
                <button id="next" onPointerDown={nextDom} >
                    <Next/>
                </button>
            </div>
            <div className="time"></div>
        </div>
    </>
  )
}

export default Slider