import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

// import { ResumenProductoItem } from "./ResumenProductoItem";
import Product from "../../app/modelos/Product";
import { ServicioPublico } from "../../app/js/ServicioPublico";
import { ApiBack } from "../../app/js/ApiBack";
import { Authenticate } from "../auth/Authenticate";

export const ResumenProducto = () => {
  const navigate = useNavigate();
  const value = useContext(DataContext);
  const eliminarProducto = value.eliminarProducto;
  const editarProducto = value.editarProducto;

  // const [productos] = value.productos;
  //useState es un hook propio de react que autogestiona la variable
  const [isLoading, setIsLoading] = useState(true);
  const [arrayProducts, setArrayProducts] = useState([]);

  const obtenerProductos = async () => {
    const resultado = await ServicioPublico.sendGET(ApiBack.PRODUCT_LIST_ALL);
    setArrayProducts(resultado);
    console.log("arrayProducts: ", arrayProducts);
    return resultado;
  }

  const deleteProducto = async (idProducto) => {
    const url = ApiBack.PRODUCT_REMOVE + "/" + idProducto;
    const resultado = await ServicioPublico.sendDELETE(url);
    obtenerProductos();
  }

 
  if (!Authenticate()){
    navigate("/Login");
  }

  useEffect(() => {
    obtenerProductos();
    setIsLoading(false);
  }, []);

  if (isLoading)
  {
    return (
      <div className="App">
        <br/><br/><br/><br/><br/><br/><br/>
      <h1>Cargando...</h1>
    </div>
    );
  }
  return (
    <>
    
      <div>
        <br /><br /><br /><br />
        <h1>Listado de Productos</h1>
      </div>
      <div className="mt-4">
        <Link to="/agregar">
          <button>Agregar Nuevo Producto</button>
        </Link>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {arrayProducts.map((producto, index) => (
              <div className="col" key={index}>

                <div className="card shadow-sm">
                  <img src={producto.productImage} height={150} width={150} alt="gamora" />
                  <div className="card-body">
                    <h1>{producto.productName}</h1>
                    <p className="card-text">{producto.productDescription}</p>
                    <p className="price">${producto.productValue}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                          if (window.confirm("Esta seguro de que desea eliminar el producto " + producto.productName + " ?")) {
                            deleteProducto(producto._id)
                          } }
                          }
                        >
                          <i className="fa-regular fa-trash-can"></i> Eliminar
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => editarProducto(producto._id)}
                        >
                          <i className="fa-regular fa-pen-to-square"></i> Editar
                        </button>
                      </div>
                      <small className="text-muted">{producto.productStock} unidades</small> 
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="mt-4">
        <Link to="/agregar">
          <button>Agregar Nuevo Producto</button>
        </Link>
      </div>


    </>
  );
};
