import React from "react";

export const ResumenVentas = () => {
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
                            <th scope="col">Id Venta</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
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