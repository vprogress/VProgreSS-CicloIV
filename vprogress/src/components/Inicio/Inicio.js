import React from 'react'

import "./Inicio.css"

import "bootstrap/dist/css/bootstrap.min.css";



export const Inicio = () => {
  return (
    <>
      <div className="Productos">
        <h1 className="Tittle">INICIO DE PAGINA</h1>
      </div>
      <br />
      <div className="row">
        <div className="container">
          <div className="col-lg-12">
            <div
              style={{
                backgroundColor: "#e076ac",
                padding: "40px 20px",
                borderRadius: 25,
                marginBottom: 30,
              }}
            >
              <div className="container">
                <img
                  src="https://subscriptionboxy.com/wp-content/uploads/2020/05/Pop-In-A-Box-Funko-Pop-Subscription-2.png"
                  width={830}
                  height={250}
                />
                <center>
                  <h1 className="display-4 ">START FUNKO TOY!</h1>
                  <hr />
                </center>
                <p>
                  Para entender un poco la historia de los Funko Pop, primero
                  hay que saber qué hay detrás de esta empresa americana fundada
                  a finales de los 90. Funko fabrica juguetes de cultura pop con
                  multitud de licencias; aunque tuvo algunos altibajos serios,
                  en la actualidad está en la cresta de la ola con los famosos
                  Funko Pop. Evidentemente, Funko comenzó con unas líneas de
                  juguetes a modo de figuras llamadas “bobble head”, cuya cabeza
                  se une al cuerpo por un muelle que les hace o permite mover la
                  cabeza (figuras más realistas y bastante originales por
                  aquella época).Pasado el tiempo, nace una nueva Funko, por
                  decirlo de algún modo: su creador y fundador de Funko, Mike
                  Becker, decide vender en 2005 la marca a Brian Marotti, y este
                  hace que a partir de 2010 sus productos despeguen, creando un
                  formato llamado Funko Pop que vende miles de millones de
                  unidades desde entonces por todo el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="col-lg-12">
            <center>
              <h1 className="display-4">UPDATE - NEW! FUNKO TOY</h1>
              <hr />
            </center>
            <p>
              Una figura REGULAR es toda aquella que Funko distribuye de manera
              indiscriminada a todas y cada una de las tiendas, por tanto, es
              una figura relativamente MUY FÁCIL de conseguir, así que no
              tendrás problemas de poder añadirla a tu colección. Explicado
              esto, sumerjámonos en el increíble mundo.
            </p>
          </div>
        </div>
      </div>
      <div className="row store">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="itemback">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_830030-MCO48028103435_102021-O.jpg"
                  style={{ width: 214, height: 214 }}
                  alt
                />
                <h4>AGATHA HARKNESS</h4>
                <h6>$75.000</h6>
                <button
                  type="button"
                  data-item="AGATHA_HARKNES"
                  className="btn btn-primary"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
            <div className="col">
              <div className="itemback">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_830030-MCO48028103435_102021-O.jpg"
                  style={{ width: 214, height: 214 }}
                  alt
                />
                <h4>GROOT</h4>
                <h6>$57.000</h6>
                <button type="button" className="btn btn-primary">
                  Añadir al carrito
                </button>
              </div>
            </div>
            <div className="col">
              <div className="itemback">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_830030-MCO48028103435_102021-O.jpg"
                  style={{ width: 214, height: 214 }}
                  alt
                />
                <h4>BLACK WIDOW</h4>
                <h6>$82.000</h6>
                <button type="button" className="btn btn-primary">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 20, marginBottom: 150 }}>
            <div className="col">
              <div className="itemback">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_830030-MCO48028103435_102021-O.jpg"
                  style={{ width: 214, height: 214 }}
                  alt
                />
                <h4>BATMAN NINJA</h4>
                <h6>$78.000</h6>
                <button type="button" className="btn btn-primary">
                  Añadir al carrito
                </button>
              </div>
            </div>
            <div className="col">
              <div className="itemback">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_830030-MCO48028103435_102021-O.jpg"
                  style={{ width: 214, height: 214 }}
                  alt
                />
                <h4>GAMORA</h4>
                <h6>$70.000</h6>
                <button type="button" className="btn btn-primary">
                  Añadir al carrito
                </button>
              </div>
            </div>
            <div className="col">
              <div className="itemback">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_830030-MCO48028103435_102021-O.jpg"
                  style={{ width: 214, height: 214 }}
                  alt
                />
                <h4>FLASH</h4>
                <h6>$59.000</h6>
                <button type="button" className="btn btn-primary">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
