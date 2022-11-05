import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Carrito } from "./components/Carrito";
import { Footer } from "./components/Footer";
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./context/Dataprovider";
import 'boxicons';
import  Navbar  from "./components/Header/Navbar";
//Administrador

import {ResumenProducto} from "./components/administrador/ResumenProducto.js";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
 
          <Navbar />
          <Header />
          <Carrito />
          <Paginas />
        </Router>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
