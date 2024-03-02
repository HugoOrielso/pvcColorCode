import React, { useState } from 'react';
import Footer from '../Inicio/Footer';
import SecondNavBar from '../Inicio/SecondNavBar';
import '@styles/distribuidores.css'
import {Reveal,Zoom} from 'react-reveal'
import hombreConCasco from '@imagenes/otros/hombreCasco.webp'
import mujercall from '@imagenes/otros/mujerCall.webp'
const Mapas = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const list = [
    { name: "PVC color's Cúcuta", link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.0241896983734!2d-72.50879533042858!3d7.884944927934246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645cea28a7eb5%3A0x34836d2791b5c956!2sDistribuidora%20Pvc%20Colors!5e0!3m2!1ses-419!2sco!4v1708189382327!5m2!1ses-419!2sco" },
    { name: "PVC color's Cúcuta - el callejón", link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.0026079511339!2d-72.50781483044743!3d7.893976527904715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e664570befc274b%3A0xa4681110cfe3c49b!2sAv.%207%20%232-85%2C%20Carora%2C%20C%C3%BAcuta%2C%20Norte%20de%20Santander!5e0!3m2!1ses-419!2sco!4v1708207891311!5m2!1ses-419!2sco" },
  ];

  const handleMapChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedMap(list[selectedIndex]);
  };

  const listNumbers = [
    {name: "PVC color's Cúcuta", direccion: "Calle 11 # 9-29", numero: "+57 3118727016", keyword: "CUC", ciudad: "Cúcuta"},
    {name: "PVC color's Cúcuta - el callejón", direccion: "Avenida 7 # 2-85", numero: "+57 3166288243", keyword: "CUC", ciudad: "Cúcuta"}
  ]

  const handleNumberChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedNumber(listNumbers[selectedIndex]);
  };

  return (
    <>
    <SecondNavBar/>
    <main className='main-wrapper' style={{minHeight: "90vh"}}>

      <section className='grid-mapisng'>
        <section className='mapas' style={{maxWidth: "1300px"}}>
          <Zoom>
          <div className='list'>
            <h2>Selección de Mapas</h2>
            <h2>Selecciona una ciudad</h2>
            <select onChange={handleMapChange} style={{marginBottom: "1em"}}>
              <option value={-1}>Seleccione un mapa</option>
              {list.map((map, index) => (
                <option key={index} value={index}>
                  {map.name}
                </option>
              ))}
            </select>
          </div>
          </Zoom>
          <Reveal>
          <div style={{ maxWidth: "1300px" , width: "100%", maxHeight: "500px", textAlign: "center"}}>
            {selectedMap ? (
              <div  style={{ maxWidth: "1250px" , width: "100%"}}>
                <iframe src={selectedMap.link} width={"100%"} height={450} style={{ border: "0" }} allowFullScreen="" loading="async" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            ): 
              <div className='img-distribuidores'>
                <img src={hombreConCasco} alt="hombre con casco" />
                <div className='content-hombre'>
                  <div>
                    
                  </div>
                  <h2 className='h2-content-hombre'>Nuestros distribuidores</h2>
                  <p className='p-content-hombre'>Siempre dispuestos a mostrar lo mejor de nuestra marca, demostrando nuestros productosde primera calidad desarrollados con losmejores materiales e insumos</p>
                </div>
              </div>
            }
          </div>
          </Reveal>
          <hr />

          <section className='talonario'>
            <Reveal>
            <div className='list'>
              <h2>Talonario</h2>
              <h2>Selecciona una ciudad</h2>
              <select onChange={handleNumberChange}>
                <option value={-1}>Selecciona un número</option>
                {listNumbers.map((number, index) => (
                <option key={index} value={index}>
                  {number.name}
                </option>
                ))}
              </select>
            </div>
            </Reveal>
            <section>
            <Zoom>
            <div className='phones'>
              {selectedNumber ? (
                <div className='container-talonario'>
                  <span className='palabraClave'> {selectedNumber.keyword}</span>
                  <div>
                    <p>Dirección: {selectedNumber.direccion}</p>
                    <p>Número: {selectedNumber.numero}</p>
                    <p>Ciudad: {selectedNumber.ciudad}</p>
                  </div>
                </div>
              ): 
              
              <div className='img-distribuidores'>
                <img src={mujercall} alt="mujer call" />
                <div className='content-mujer'>
                  <h2>Llámanos</h2>
                  <p>Nuestros servicio al cliente siempre dispuesto a servir y asesorarse, el mejor servicio personalizado</p>
                </div>
              </div>
              }
            </div>
            </Zoom>
            </section>
          </section>
        </section>

      </section>

    </main>
      <Footer />
    </>
  );
};

export default Mapas;
