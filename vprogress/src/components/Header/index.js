import React, {useContext} from 'react'
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

  console.log(menu)

  const toogleMenu = () => {
    setMenu(!menu)
  }




  return (
    <>
      <header>
        <Link href="https://www.google.com/">
          <div className="logo">
            <img src={logo1} alt="logo" width="200" height="60" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/productos/">CATALOGO</Link>
          </li>
          <li>
            <Link to="/SOMOS">SOMOS</Link>
          </li>
          <li>
            <Link to="/CONTACTENOS">CONTACTENOS</Link>
          </li>
          <li>
            <div className="cart" onClick={toogleMenu}>
              <img src={duende} alt=".cart" />
              <span className="item__total">{carrito.length}</span>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
