import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

import { ResumenProductoItem } from "./ResumenProductoItem";

export const ResumenProducto = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  return (
    <>
      <div>
        <br /><br /><br /><br />
        <h1>Listado de Productos</h1>
      </div>
      <div class="mt-4">
        <Link to="/agregar">
          <button>Agregar Nuevo Producto</button>
        </Link>
      </div>
      <div classNameName="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productos.map((producto) => (
              <ResumenProductoItem
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
              />
            ))}
          </div>
        </div>

      </div>
      <div class="mt-4">
        <Link to="/agregar">
          <button>Agregar Nuevo Producto</button>
        </Link>
      </div>


    </>
  );
};
