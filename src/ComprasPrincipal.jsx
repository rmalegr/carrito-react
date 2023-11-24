import React from 'react'
import { Navbar } from './Navbar'
import { CarritoApp } from './CarritoApp'
import { Route, Routes } from 'react-router-dom'
import { Compras } from './Compras'
import { Carrito } from './Carrito'

export const ComprasPrincipal = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<CarritoApp/>} />
                <Route path="/carrito" element={<CarritoApp/>} />
                <Route path="/compras" element={<Compras/>} />
                <Route path="/carritoCompras" element={<Carrito/>} />
                <Route path='/*' element={ '/'} />
               
            </Routes>
        </div>
    </>
  )
}
