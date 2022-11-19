import React, { useContext, useEffect, useState} from "react";
import { ApiBack } from "../../app/js/ApiBack";
import { ServicioPublico } from "../../app/js/ServicioPublico";
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";


export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  const [isLoading, setIsLoading] = useState(true);
  const [arrayProducts, setArrayProducts] = useState([]);

  const obtenerProductos = async () => {
    const resultado = await ServicioPublico.sendGET(ApiBack.PRODUCT_LIST_ALL);
    setArrayProducts(resultado);
    console.log("arrayProducts: ", arrayProducts);
    return resultado;
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
  
      <h1 className="Tittle">PRODUCTOS V</h1>
      <div className="Productos">
        
      {arrayProducts.map((producto) => (
          <ProductoItem
            key={producto._id}
            id={producto._id}
            title={producto.productName}
            price={producto.productValue}
            image={producto.productImage}
            category={producto.productDescription}
            cantidad={producto.productStock}
          />
        ))}
        
      </div>
      
      {/* Paginacion Ejemplo */}
      
    </>
  );
};