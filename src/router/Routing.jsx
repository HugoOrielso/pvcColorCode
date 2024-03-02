import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../components/Inicio/Inicio'
import Productos from '../components/Productos/Productos'
import Nosotros from '../components/Nosotros/Nosotros'
import Dudas from '../components/Dudas/Dudas'
import Categoria from '../components/lineas/Categorias'
import ProductoDetail from '../components/Productos/ProductoDetail'
import ErrorComponent from '../components/ErrorComponent'
import Aprende from '../components/aprende/Aprende'
import Distribuidores from '../components/Distribuidores/Distribuidores'
import Calculadora from '../components/calculadora/Calculadora'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/lineas' element={<Productos/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/dudas' element={<Dudas/>}/>
        <Route path='/lineas/:categoria' element={<Categoria/>}/>
        <Route path='/lineas/:categoria/producto/:name' element={<ProductoDetail/>}/>
        <Route path='/aprende' element={<Aprende/>}/>
        <Route path='/distribuidores' element={<Distribuidores/>}/>
        <Route path='/calculadora' element={<Calculadora/>}/>
        <Route path='/lotie' element={<Calculadora/>}/>
        <Route path='*' element={<ErrorComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing