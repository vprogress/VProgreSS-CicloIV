import React from "react";
export const EditProducto = () => {
    return (

        <div>
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="nombre"/>
                    <label for="floatingInputGroup1">Nombre</label>

            </div>
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="descripcion"/>
                    <label for="floatingInputGroup1">Descripcion</label>

            </div>
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="precio"/>
                    <label for="floatingInputGroup1">Precio</label>

            </div>
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="imagen"/>
                    <label for="floatingInputGroup1">Imagen</label>

            </div>

        </div>
    );
};