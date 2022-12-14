import React, { useContext} from "react";
import { DataContext } from "../../context/Dataprovider";

import "./Productos.css";

export const ProductoItem = ({ id, title, price, image, category }) => {
  //Funcion
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="Producto">
      <a href="#">
        <div className="Producto__img">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="Producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
        <div className="buttom">
              <button className="btn" onClick={() => addCarrito(id)}>
              añadir al carrito </button>
            <div>
                <a href="#" className="btn">
                Vista
                </a>
            </div>
        </div>
    </div>
  );
};
