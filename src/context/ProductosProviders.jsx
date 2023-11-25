import React, { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'

export const ProductosProviders = ({children}) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log(error);
        setProductos([]);

      }
    };
    useEffect(() => {
      fetchProductos();
    }, []);
    return (
      <ProductosContext.Provider value={{ productos }}>
           {children}
      </ProductosContext.Provider>
    );
}
