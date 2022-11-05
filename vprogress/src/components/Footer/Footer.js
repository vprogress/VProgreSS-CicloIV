import React from 'react'
import pinturest from "../../img/pinterest.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import google from "../../img/google-plus.png";
import  casa  from "../../img/house.png";
import mensaje  from "../../img/contact.png";
import telefono from "../../img/smartphone.png";

import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const Footer = () => {
return (
  <footer>
    <div className="container-footer-all">
      <div className="container-body">
        <div className="colum1">
          <h1>Mas informacion de la compañia</h1>
          <p>
            Nuestra trayectoria ha sido corta pero eficiente, hemos logrado una
            posicion confiable en el mercado, nuestros empleados y directivos
            dan lo mejor de si para brindar el mejor trato y la mejor conexion
            con nuestros clientes. Nacimos hace algunos años con la esperanza de
            traer alegrias y momentos a todos los que buscan algo diferente,
            atraves de nuestros objetos de coleccion, podemos ofrecer eso y
            mucho mas, contamos con varios años de experiencia en el mercado y
            miles de clientes felices.
          </p>
        </div>
        <div className="colum2">
          <h1>Redes Sociales</h1>
          <div className="row">
            <img src={facebook} />
            <label>Siguenos en Facebook</label>
          </div>
          <div className="row">
            <img src={twitter} />
            <label>Siguenos en Twitter</label>
          </div>
          <div className="row">
            <img src={instagram} />
            <label>Siguenos en Instagram</label>
          </div>
          <div className="row">
            <img src={google} />
            <label>Siguenos en Google Plus</label>
          </div>
          <div className="row">
            <img src={pinturest} />
            <label>Siguenos en Pinteres</label>
          </div>
        </div>
        <div className="colum3">
          <h1>Informacion Contactos</h1>
          <div className="row2">
            <img src={casa} />
            <label>Bogotá, Colombia </label>
          </div>
          <div className="row2">
            <img src={telefono} />
            <label>(+57) Llamame</label>
          </div>
          <div className="row2">
            <img src={mensaje} />
            <label>vprogress@hotmail.com</label>
          </div>
        </div>
      </div>
    </div>
    <div className="container-footer">
      <div className="footer">
        <div className="copyright">
          <a href={"#"}>
            © 2022 Todos los Derechos Reservados | UNIVERSIDAD DE ANTIOQUIA
          </a>
        </div>
      </div>
    </div>
  </footer>
);
}
