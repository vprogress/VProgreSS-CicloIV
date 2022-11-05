import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const ResumenProductoItem = ({ id, title, price, image, category, cantidad }) => {
  //Funcion
  const value = useContext(DataContext);
  const eliminarProducto = value.eliminarProducto;
  const editarProducto = value.editarProducto;

  return (
    <div className="col">
      
      <div className="card shadow-sm">
        <img src={image} height={150} width={150} alt="gamora" />
        <div className="card-body">
          <h1>{title}</h1>
          <p className="card-text">{category}</p>
          <p className="price">${price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => eliminarProducto (id)}
              >
                <i className="fa-regular fa-trash-can"></i> Eliminar
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => editarProducto(id)} 
              >
                <i className="fa-regular fa-pen-to-square"></i> Editar
              </button>
            </div>
            <small className="text-muted">{cantidad} unidades</small>
          </div>
        </div>
      </div>
    </div>
  );
};
