import React from "react";

import gamora from "../../img/Gamora.jpeg"
import darth from "../../img/Darth.jpeg"
import darthMoul from "../../img/DarthMoul.jpg"


export const ResumenProducto = () => {
    return (
        <>
        <div><h1>Listado de Productos</h1></div>
        <div class="album py-5 bg-light">
            
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                        <img src={gamora}  height={150} width={150} alt="gamora"/>
                            <div class="card-body">
                                <p class="card-text">
                                Gamora<br/>
                                GUARDIANES DE LA GALAXIA<br/>
                                $85</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-regular fa-trash-can"></i> Eliminar</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-regular fa-pen-to-square"></i> Editar</button>
                                    </div>
                                    <small class="text-muted">9 unidades</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={darth}  height={150} width={150} alt="darth"/>

                            <div class="card-body">
                            <p class="card-text">
                                Darth Moul<br/>
                                STAR WARS<br/>
                                $85</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-regular fa-trash-can"></i> Eliminar</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-regular fa-pen-to-square"></i> Editar</button>
                                    </div>
                                    <small class="text-muted">3 unidades</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm" >
                            <img src={darthMoul} height={150} width={150} alt="darthMoul"/>


                            <div class="card-body">
                            <p class="card-text">
                                Nike Air Force 1 Low Supreme Black<br/>
                                NIKE<br/>
                                $475</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-regular fa-trash-can"></i> Eliminar</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-regular fa-pen-to-square"></i> Editar</button>
                                    </div>
                                    <small class="text-muted">19 unidades</small>
                                </div>
                            </div>
                        </div>
                    </div>

                 
                </div>
            </div>
        </div>
        </>
    );
};