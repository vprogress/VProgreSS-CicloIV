import React from "react";
import { Inicio } from "./Inicio/Inicio";
import { Route, Routes } from "react-router-dom";
import { ProductosLista } from "./Productos/Productos";
import { Somos } from "./Somos/Somos";
import { Contactenos } from "./Contactenos/Contactenos";
//Administrador
import { ResumenVentas } from "./administrador/ResumenVentas";
import { ResumenProducto } from "./administrador/ResumenProducto";
import { EditProducto } from "./administrador/EditProducto";
import { AgregarProducto } from "./administrador/AgregarProducto";
import { Login } from "./auth/Login";

export const Paginas = () => {
  return (
    <main>
      {/* Rutas para paginacion y division de categorias (Routes)*/}
      <Routes>

        {/* Inicio de sesion */}
        <Route path="/login" element={<Login/>} />
        {/* Inicio o home de la pagina */}
        <Route path="/" element={<Inicio />} />
        {/* Catalogo o Productos de la pagiina */}
        <Route path="/Productos" element={<ProductosLista />} />
        <Route path="/Somos/" element={<Somos />} />
        <Route path="/Contactenos" element={<Contactenos />} />
        {/* Administrador */}
        <Route path="/reports" element={<ResumenVentas />} />
        <Route path="/listproducts" element={<ResumenProducto />} />
        <Route path="/editar/:codigo" element={<EditProducto />} />
        <Route path="/agregar" element={<AgregarProducto/>} />
      </Routes>
    </main>
  );
};
