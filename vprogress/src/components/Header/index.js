import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Imagen Logo header
import logo1 from "../../img/logo1.jpg";
// Boton Carrito
import duende from "../../img/duende.png";
//Datos
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  console.log(menu);

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="https://www.google.com/">
          <div className="logo">
            <img src={logo1} alt="logo" width="200" height="60" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
              <Link  className="nav-link" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/productos/">CATALOGO</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/SOMOS">SOMOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/CONTACTENOS">CONTACTENOS</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu">
              <li>
                  <Link className="dropdown-item"  to="/agregar">Agregar</Link>
                </li>
                <li>
                  <Link className="dropdown-item"  to="/listproductos">Listado de Productos</Link>
                </li>
                <li>
                  <Link className="dropdown-item"  to="/listventas">Listado de Ventas</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
            </li>
          </ul>
          <span className="navbar-text">
            <div className="cart" onClick={toogleMenu}>
                <img src={duende} alt=".cart" height={100} width={120} />
                <span className="item__total">{carrito.length}</span>
              </div>
              <Link className="dropdown-item"  to="/login">Iniciar sesion</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
