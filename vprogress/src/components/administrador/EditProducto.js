import React from "react";
export const EditProducto = () => {
  return (
    <>
      <div>
        <div>
          <h1>Editar Producto</h1>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="nombre"
            placeholder="nombre"
          />
          <label for="nombre">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="descripcion"
            placeholder="descripcion"
          />
          <label for="descripcion">Descripcion</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="precio"
            placeholder="precio"
          />
          <label for="precio">Precio</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="file"
            class="form-control"
            id="imagen"
            placeholder="imagen"
            accept="image/*"
          />
          <label for="imagen">Imagen</label>
        </div>
        <div class="mt-4">
          <button class="w-100 btn btn btn-warning" type="submit">
            Registrar producto
          </button>
        </div>
        <div class="mb-3">
          <div class="d-flex justify-content-center">
            <img
              id="fotArtYa"
              src="src/assets/images/noFoto.png"
              class="maximoInterprete"
              alt="No foto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
