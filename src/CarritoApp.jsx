import React, { useContext, useEffect, useState } from "react";
import { Card } from "./CardCarrito";
import { ProductosContext } from "./context/ProductosContext";
import { CarritoContext } from "./context/CarritoContext";

export const CarritoApp = () => {
 

    const {productos} = useContext(ProductosContext)

    const {
      listaCompras,
      agregarCompra,
      aumentarCantidad,
      disminuirCantidad,
      eliminarCompra,
    } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
      agregarCompra(compra);
    };
    const handleQuitar = (id) => {
      eliminarCompra(id);
    
    };
  

  return (
    <>
      <h1>E-commerce Productos</h1>
      <hr />
      {productos.map((producto) => (
        <Card
          key={producto.id}
          titulo={producto.title}
          id={producto.id}
          imagen={producto.image} 
          precio={producto.price}
          descripcion={producto.description}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        />
      ))}
    </>
  );
};
