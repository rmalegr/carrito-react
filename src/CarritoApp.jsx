import React, { useEffect, useState } from 'react'
import { Card } from './CardCarrito'

export const CarritoApp = () => {
 const [productos, setProductos] = useState([])

 const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/')
            const data = await response.json()
            setProductos(data)
            console.log(data)

        } catch (error) {
            console.log(error)
            setProductos([])        
        }
    }
    useEffect(() => {
        fetchProductos()
    },[])

  return (
    <>
        <h1>E-commerce Productos</h1>
        <hr />
        {productos.map(producto => (
            
            <Card
                    key={producto.id}
                    id={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    precio={producto.price}
                    
            />
            ))
        }
    </>
    
  )
}
