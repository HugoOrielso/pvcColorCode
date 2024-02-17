import React from 'react'

const Acordeon = () => {
  return (
    <section style={{gap: "2.5em", display: "flex", flexDirection: "column", alignItems:"start", textAlign: "start", width: "100%", justifyContent: "start", paddingLeft: "2em"}}>
        <details name='info'>
            <summary>Aprende uno</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde odit eligendi aut incidunt ducimus! Tenetur aliquid itaque quisquam, consectetur reiciendis non placeat doloremque mollitia culpa animi tempore corporis cupiditate.</p>
        </details>
        <details name='info'>
            <summary>Aprende dos</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde odit eligendi aut incidunt ducimus! Tenetur aliquid itaque quisquam, consectetur reiciendis non placeat doloremque mollitia culpa animi tempore corporis cupiditate.</p>
        </details>
        <details name='info'>
            <summary>Aprende tres</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde odit eligendi aut incidunt ducimus! Tenetur aliquid itaque quisquam, consectetur reiciendis non placeat doloremque mollitia culpa animi tempore corporis cupiditate.</p>
        </details>

    </section>
  )
}

export default Acordeon