import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import { Footer } from "./components/Footer";
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./context/Dataprovider";
import 'boxicons';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
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
