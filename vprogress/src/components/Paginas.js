import React from "react";
import { Inicio } from "./Inicio";
import { Route, Routes } from "react-router-dom";
import { ProductosLista } from "./Productos/index";
import { Somos } from "./Somos";
import { Contactenos } from "./Contactenos";

export const Paginas = () => {
  return (
    <main>
      {/* Rutas para paginacion y division de categorias (Routes)*/}
      <Routes>
        {/* Inicio o home de la pagina */}
        <Route path="/" element={<Inicio />} />
        {/* Catalogo o Productos de la pagiina */}
        <Route path="/Productos/" element={<ProductosLista />} />

        <Route path="/Somos/" element={<Somos />} />
        
        <Route path="/Contactenos" element={ <Contactenos/>} />
      </Routes>
    </main>
  );
};
