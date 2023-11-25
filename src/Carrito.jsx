import React, { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";

export const Carrito = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const calcularTotal = () => {
    let total = 0;
    listaCompras.forEach((item) => {
      (total += item.price * item.cantidad).toFixed(2)
    });
    return total;
  }

  const calcularTotal2 = () => {
    let resultado = listaCompras.reduce((acc, item) => {
      return acc + item.price * item.cantidad;
    }, 0);
    return resultado;
  }
   
  const handleImpresion = () => {
      print()
  }


  return (
    <>
      <div className="container mt-4">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-outline-primary " onClick={(() =>{disminuirCantidad(item.id)})}>-</button>
                  <button className="btn btn-primary">{item.cantidad}</button>
                  <button className="btn btn-outline-primary" onClick={(() =>{aumentarCantidad(item.id)})}>+</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarCompra(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          
            
            
          </tbody>
        </table>
        <div className="row">   
              <button className="btn btn-primary" onClick={handleImpresion}>Imprimir</button>
              <h4>Total:$ {calcularTotal2().toFixed(2)}</h4>
        </div>
      </div>
    </>
  );
};
