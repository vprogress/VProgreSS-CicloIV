import React, { useContext } from 'react'
import { Link } from "react-router-dom";
// Imagen Logo header
import Funk from "../../img/Funk.png";
// Boton Carrito
import nube from "../../img/Nube.png";

import "./Header.css";

//Data provider
import { DataContext } from "../../context/Dataprovider";




export const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  console.log(menu)

  const toogleMenu = () => {
    setMenu(!menu)
  }
//-----------------------------------------------------------------//

  return (
    <>
      <header>
        <Link href="https://www.google.com/">
          <div className="logo">
            <img src={Funk} alt="logo" width="150" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">
              <button>Inicio</button>
            </Link>
          </li>
          <li>
            <Link to="/Productos/">
              <button>Productos</button>
            </Link>
          </li>
          <li>
            <Link to="/Somos">
              <button>Somos</button>
            </Link>
          </li>
          <li>
            <Link to="/Contactenos">
              <button>Contactenos</button>
            </Link>
          </li>
          <li>
            <div className="cart" onClick={toogleMenu}>
              <img src={nube} alt="nube" />
              <span className="item__total">{carrito.length}</span>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
