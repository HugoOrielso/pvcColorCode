import React, { useState } from 'react';
import Footer from '../Inicio/Footer';
import SecondNavBar from '../Inicio/SecondNavBar';
import '@styles/distribuidores.css'
import LottienAnimation from '../Nosotros/Lottie';
import PhoneAnimation from '/public/phone.json'
import MapAnimation from '/public/maps.json'
const Mapas = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const list = [
    { name: "PVC color's Cúcuta", link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.0241896983734!2d-72.50879533042858!3d7.884944927934246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645cea28a7eb5%3A0x34836d2791b5c956!2sDistribuidora%20Pvc%20Colors!5e0!3m2!1ses-419!2sco!4v1708189382327!5m2!1ses-419!2sco" },
    { name: "mapa 2", link: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31620.94800787229!2d-72.47979755!3d7.8301395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1708187586432!5m2!1ses-419!2sco" },
  ];

  const handleMapChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedMap(list[selectedIndex]);
  };

  const listNumbers = [
    {name: "PVC color's Cúcuta", direccion: "Calle 11 # 9-29", numero: "3118727016", keyword: "CUC", ciudad: "Cúcuta"}
  ]

  const handleNumberChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedNumber(listNumbers[selectedIndex]);
  };

  return (
    <>
    <SecondNavBar/>
    <main style={{minHeight: "90vh"}}>
      <section className='grid-maping'>
        <section className='mapas' style={{maxWidth: "1300px"}}>
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
          <div style={{ maxWidth: "1250px" , width: "100%", maxHeight: "500px", textAlign: "center"}}>
            {selectedMap ? (
              <div  style={{ maxWidth: "1250px" , width: "100%"}}>
                <iframe src={selectedMap.link} width={"100%"} height={450} style={{ border: "0" }} allowFullScreen="" loading="async" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            ): <LottienAnimation alto={"500px"} ancho={"100%"} animacion={MapAnimation}/>}
          </div>
          <hr />
          <section className='talonario'>
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
            <section>
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
              ): <LottienAnimation ancho={"100%"} alto={"100%"} animacion={PhoneAnimation}/> }
            </div>
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
