import React from 'react'

export const Contactenos = () => {
    return (
        <>
    <h1 className="Tittle">CONTACTENOS</h1>
      <div className="Productos"></div>
    <section id="general_section">
      <div className="nosotros">
        <h1>Nosotros</h1>
        <p className="texto_nosotros">
          Nuestra trayectoria ha sido corta pero eficiente, hemos logrado una
          posicion confiable en el mercado, nuestros empleados y directivos dan
          lo mejor de si para brindar el mejor trato y la mejor conexion con
          nuestros clientes. <br />
          Nacimos hace algunos años con la esperanza de traer alegrias y
          momentos a todos los que buscan algo diferente, atraves de nuestros
          objetos de coleccion, podemos ofrecer eso y mucho mas, contamos con
          varios años de experiencia en el mercado y miles de clientes felices.
        </p>
        <p className="texto_nosotros">
          Nuestra mayor prioridad es traer los ultimos lanzamientos de las
          distintas marcas, haremos lo imposible por traerlo a las manos de
          nuestros clientes, desde lo mas antiguo pasando por figuras de suprema
          coleccion, como ediciones especiales de comics hasta los ultimos
          articulos de coleccion que quieras tener, nuestra oferta no termina
          alli, tenemos toda clase de variedad de productos, preguntanos..
        </p>
        <p className="texto_nosotros">
          Hemos particpado en diferentes ferias como, el Campus Party, el
          AnimeCoon, el comic con, la Poli week, entre otros, varios estudiantes
          de la Universidad Politecnico Grancolombiano, pueden dar fe de la
          calidad y seriedad de nuestros productos y transacciones.
        </p>
      </div>
      <div className="formulario">
        <h1
          style={{
            marginLeft: "4em",
            fontFamily: "Cooper Black",
            margin: "1em 0.3em",
            textAlign: "center",
          }}
        >
          Contactanos
        </h1>
        <form
          action
          method="get"
          onsubmit="return checking(this)"
          name="formulario"
          style={{ paddingBottom: "1em" }}
        >
          <label htmlFor="nombre"> Nombre:</label>
          <br />
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Escribe tu nombre"
            className="form-control"
            required
            onblur="esconder(aviso_nombre, this)"
            onfocus="mostrar(aviso_nombre, this)"
            style={{ marginBottom: "1.1em" }}
          />
          <div className="hidding" id="aviso_nombre">
            <p>En realidad, Si queremos saber como te llamas</p>
          </div>
          <br />
          <label htmlFor="correo"> Correo:</label>
          <br />
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="Escribe tu correo electronico"
            className="form-control"
            required
            onblur="esconder(aviso_correo, this)"
            onfocus="mostrar(aviso_correo, this)"
            style={{ marginBottom: "1.1em" }}
          />
          <div className="hidding" id="aviso_correo">
            <p>Escribe tu correo bien bonito porfis</p>
          </div>
          <br />
          <label htmlFor="tema"> Tema:</label>
          <br />
          <input
            type="text"
            name="tema"
            id="tema"
            placeholder="Sobre que tema quieres hablar"
            className="form-control"
            onblur="esconder(aviso_tema, this)"
            onfocus="mostrar(aviso_tema, this)"
            style={{ marginBottom: "1.1em" }}
          />
          <div className="hidding" id="aviso_tema">
            <p>Y el tema de nuestra aventura sera?</p>
          </div>
          <br />
          <label htmlFor="texto"> En que podemos ayudarte:</label>
          <br />
          <textarea
            name="texto"
            id="texto"
            placeholder="Escribe el mensaje que deseas enviarnos, tomate tu tiempo mensaje"
            minLength={6}
            className="form-control"
            onblur="esconder(aviso_mensaje, this)"
            onfocus="mostrar(aviso_mensaje, this)"
            style={{ height: "8em", marginBottom: "1.1em" }}
            defaultValue={""}
          />
          <div className="hidding" id="aviso_mensaje">
            <p>Nos pondremos tristes si no nos dices nada</p>
          </div>
          <br />
          <br />
          <button
            type="button"
            onclick="boton() (this).blur()"
            id="btenvio"
            className="btn btn-info"
          >
            Enviar
          </button>
          <input
            type="button"
            defaultValue="Recargar"
            onclick="location.reload()"
            className="btn btn-warning"
          />
          <p className="btn" id="alerta">
            Necesitas llenar los campos por favor
          </p>
        </form>
      </div>
    </section>
    </>
  );
}
