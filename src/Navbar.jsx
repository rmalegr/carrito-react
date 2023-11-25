import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from './context/CarritoContext'



export const Navbar = () => {
    const {listaCompras} = useContext(CarritoContext)
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to={'/carrito'} className="navbar-brand" href="#">Carrito</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                Compras Aplicacion ❤
                </li>           
            </ul>
            </div>
            <NavLink to={'/carritoCompras'} className='navbar-text' >
                <Badge badgeContent={
                    listaCompras.length } color="secondary">
                    <ShoppingCart color='action' />
                </Badge>
            </NavLink>
        </div>
    </nav>
 </>
  )
}
