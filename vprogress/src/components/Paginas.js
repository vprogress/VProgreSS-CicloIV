import React from "react";
import { Inicio } from "./Inicio";
import { Route, Routes } from "react-router-dom";
import { ProductosLista } from "./Productos/index";

export const Paginas = () => {
  return (
    <main>
      {/* Rutas para paginacion y division de categorias (Routes)*/}
      <Routes>
        {/* Inicio o home de la pagina */}
        <Route path="/" element={<Inicio />} />
        {/* Catalogo o Productos de la pagiina */}
        <Route path="/productos/" element={<ProductosLista />} />
      </Routes>
    </main>
  );
};
