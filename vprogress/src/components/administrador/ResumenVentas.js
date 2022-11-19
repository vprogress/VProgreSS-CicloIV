import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBack } from "../../app/js/ApiBack";
import { Authenticate } from "../../app/js/Authenticate";
import { ServicioPublico } from "../../app/js/ServicioPublico";


export const ResumenVentas = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [arrayProducts, setArrayProducts] = useState([]);
    const [totalVenta, setTotalVenta] = useState(0);

    const obtenerProductos = async () => {
        const resultado = await ServicioPublico.sendGET(ApiBack.VENTAS_LIST_ALL);
        setArrayProducts(resultado);
        console.log("arrayProducts: ", arrayProducts);
        return resultado;
    }

    const navigate = useNavigate();

    if (!Authenticate()) {
        navigate("/Login");
    }

    useEffect(() => {
        obtenerProductos();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="App">
                <br /><br /><br /><br /><br /><br /><br />
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <>
            <div><br /><br /><br /><br />
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

                            {arrayProducts.map((producto, index) => (
                                setTotalVenta(totalVenta + producto.valorVenta)

                            ))}

                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Total</td>
                                <td>{totalVenta}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};