import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []

export const CarritoProviders = ({children}) => {

    //utilizar reducers3
    const comprasReducer = (state = initialState, action={}) => {
      switch (action.type) {
        case "[CARRITO] Agregar producto de compra":
          return [...state, action.payload];

        case "[CARRITO] Aumentar cantidad compra": 
          return state.map((compra) =>{
            if(compra.id === action.payload){
              return {
                ...compra,
                cantidad: compra.cantidad + 1,
              }
            }
            return compra
          
          })
          
        case "[CARRITO] Disminuir cantidad compra":
          return state.map((compra) =>{
            if(compra.id === action.payload){
              return {
                ...compra,
                cantidad: compra.cantidad - 1,
              }
            }
            return compra
          
          })

        case "[CARRITO] eliminar compra":
          return state.filter((compra) => compra.id !== action.payload);
        default:
          return state;
      }
    }

  
    const [listaCompras, dispatch ] = useReducer(comprasReducer, initialState)

    // 4 dispatch
    const agregarCompra = (compra) => {
      compra.cantidad = 1
      const action = {
        type: "[CARRITO] Agregar producto de compra",
        payload: compra,
      };

      dispatch(action);
    };

    const aumentarCantidad = (id) => {
      const action = {
        type: "[CARRITO] Aumentar cantidad compra",
        payload: id,
      };

      dispatch(action);
    };
    
    const disminuirCantidad = (id) => {
      const action = {
        type: "[CARRITO] Disminuir cantidad compra",
        payload: id,
      };
      dispatch(action);
    };
    const eliminarCompra = (id) => {
      const action = {
        type: "[CARRITO] eliminar compra",
        payload: id,
      };
      dispatch(action);
    };

   
  return (
        <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}}>
            {children}
        </CarritoContext.Provider>
  )
}
