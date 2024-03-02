    import React, { useState } from 'react'
    import {useForm} from 'react-hook-form'
    import '@styles/calculadora.css'
    const SelectProduct = ({productos}) => {
        const { handleSubmit, register, reset } = useForm({})
        const [resultDimension,setResultDimension]=useState(1)
        const [litros, setLitros] = useState(null)
        const [selectProducts,setSelectProduct] = useState(null)
        const handleProduct=(e)=>{
            reset()
            const findProduct = productos.productos.find((item)=> item.nombreProducto == e.target.value)
            setLitros("")
            setSelectProduct(findProduct)
        }
        
        const calcular =(data)=>{
            let result = parseInt(data.alto * data.ancho)
            setResultDimension(result)
            calcularTotal(selectProducts,result)
        }

        function calcularTotal(producto,resultDimension){
            let result = parseFloat(resultDimension/producto.dimensionPorLitro)
            setLitros(result)
        }
        
        return (
        <>
            <section className='calculadora-section'>
                <section className='container-calculadora'>
                    <h1>1. Selecciona el producto</h1>
                    <hr />
                    <div>
                        {
                            selectProducts ? 
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "10px"}}>
                                <img className='img-p' src={selectProducts.imagenProducto} alt={selectProducts.nombreProducto} /> 
                                <h2>{selectProducts.nombreProducto}</h2>
                            </div> 
                            : 
                            <p>Sin selección</p>  
                        }
                    </div>
                    <select name="" id="" onChange={handleProduct}>
                        <option value="">Selecciona un producto</option>
                        {productos.productos.map((producto,i)=>{
                            return(
                                <option value={producto.nombreProducto} key={i}>{producto.nombreProducto}</option>
                                )
                            })}
                    </select>
                </section>
                <section className='second-section'>
                    <div className='container-calculadora'>

                        {
                            selectProducts ? 
                            <section className='calculadora'>
                                <h1>2. Dimensiones y medidas</h1>
                                <hr />
                                <div>
                                    <form onSubmit={handleSubmit(calcular)} className='form-calculadora'>
                                        <div>
                                            <div class="coolinput">
                                                <label htmlFor="input" className="text">Alto</label>
                                                <input type="number" min={0} placeholder="Sólo números" name="input" className="input" {...register("alto")} />
                                            </div>
                                            <div class="coolinput">
                                                <label htmlFor="input" className="text">Ancho</label>
                                                <input type="number" min={0} placeholder="Sólo números" name="input" className="input" {...register("ancho")} />
                                            </div>
                                        </div>
                                        <button className='btn-calcular'>Calcular</button>
                                    </form>
                                    <div >
                                        {
                                            litros ? 
                                            <>
                                            <div style={{border: "solid .1px green", borderRadius: "5px", padding: "5px", textAlign: "center", marginTop: "10px"}}>Necesitas {litros} litros de  <b> {selectProducts.nombreProducto} </b> para cubrir {resultDimension} m<sup>2</sup> de superficie </div> 
                                            <br />  
                                            <b>Estandar: </b> con un litro de {selectProducts?.nombreProducto} puedes cubrir {selectProducts?.dimensionPorLitro} m<sup>2</sup> de superficie
                                            </>
                                        
                                            :
                                            <> 
                                                <b>Estandar: </b> con un litro de <b>{selectProducts?.nombreProducto}</b> puedes cubrir {selectProducts?.dimensionPorLitro} m<sup>2</sup> de superficie
                                            </>
                                        }
                                    </div>
                                </div>
                            </section> 
                            : null
                        }
                    </div>
                </section>
            </section>
        </>
    )
    }

export default SelectProduct