import React from "react";

// import './App.css';
import Navbar from './components/SideBarNavMenu/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import { Footer } from "./components/Footer";
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./context/Dataprovider";
import 'boxicons';
import { Somos } from "./components/Somos";
import { ProductosLista } from "./components/Productos";
import { Contactenos } from "./components/Contactenos";


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
//  <> 
//        <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/inicio' element={<Inicio/>} />
//           <Route path='/somos/' component={<Somos/>} />
//           <Route path='/products' component={<ProductosLista/>} />
//           <Route path='/contactenos' component={<Contactenos/>} />
//         </Switch>
//       </Router>
//     </> 

  );
}

export default App;
