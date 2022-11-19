import React, { useEffect, useState } from "react";
import { ApiBack } from "../../app/js/ApiBack";
import { ServicioPublico } from "../../app/js/ServicioPublico";


export const ResumenVentas = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [arrayProducts, setArrayProducts] = useState([]);
  
    const obtenerProductos = async () => {
      const resultado = await ServicioPublico.sendGET(ApiBack.VENTAS_LIST_ALL);
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
        <div><br/><br/><br/><br/>
            <div><h1>Resumen de Ventas</h1></div>
            <div className="bd-example">

                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha Venta</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {arrayProducts.map((producto, index) => (
                        <tr>
                        <th scope="row">{index}</th>
                        <td>{producto.dateVenta}</td>
                        <td>{producto.cantidadProduct}</td>
                        <td>{producto.valorVenta}</td>
                        </tr>
                    ))}
                        <tr>
                            <th scope="row">1</th>
                            <td>23/02/2022</td>
                            <td>123</td>
                            <td>24000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>24/02/2022</td>
                            <td>234</td>
                            <td>32000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Total</td>
                            <td>56000</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        </>
    );
};