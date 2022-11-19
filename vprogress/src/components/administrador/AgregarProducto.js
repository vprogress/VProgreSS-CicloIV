import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBack } from "../../app/js/ApiBack";
import { Authenticate } from "../../app/js/Authenticate";
import { ConvertirBase64 } from "../../app/js/ConvertirBase64";
import { ServicioPublico } from "../../app/js/ServicioPublico";
import noFoto from "../images/preview.jpg"

export const AgregarProducto = () => {

  const navigate = useNavigate();
  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto)
  const [imagen64, setImagen64] = useState(noFoto)
  const [isCreate, setIsCreate] = useState("")
  const [dataProduct, setDataProduct] = useState({
      productName: "",
      productDescription:"",
      productStock: 0,
      productValue: 0.0,
      productImage: "",
  });

  const handleChange = (event)=> {
    setDataProduct({
      ...dataProduct,
      [event.target.name]:event.target.value
    })
  }

  const mostrarImagen = async (event) => {
    const archivo = event.target.files;
    const imagen = archivo[0];
    setImagenMiniatura(URL.createObjectURL(imagen));
    const imgBase64 = await ConvertirBase64(imagen);
    setImagen64(String(imgBase64));
  }

  const processForm = async(event) => {
    event.preventDefault(); 
    dataProduct.productImage = imagen64;
    // el await se coloca para que espere la respuesta antes de analizar si hubo exito en la creacion
    const respuestaBE = await ServicioPublico.sendPUT(ApiBack.PRODUCT_CREATE, dataProduct);
    console.log(respuestaBE);
      if (respuestaBE.id) {
        setIsCreate("Producto creado exitosamente!.")
      } else {
        setIsCreate("No se pudo crear producto.")
      }
  }
     
  if (!Authenticate()){
    navigate("/Login");
  }


  return (
    <>
      <div>
      <br/><br/><br/><br/>
        <div>
          <h1>Agregar Producto</h1>
        </div>
        <form onSubmit={processForm}>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="productName"
            name="productName"
            placeholder="productName"
            onChange={handleChange}
            value={dataProduct.productName}
          />
          <label for="productName">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="productDescription"
            name="productDescription"
            placeholder="productDescription"
            onChange={handleChange}
            value={dataProduct.productDescription}
          />
          <label for="productDescription">Descripcion</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="productValue"
            name="productValue"
            placeholder="productValue"
            onChange={handleChange}
            value={dataProduct.productValue}
          />
          <label for="productValue">Precio</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="productStock"
            name="productStock"
            placeholder="productStock"
            onChange={handleChange}
            value={dataProduct.productStock}
          />
          <label for="productStock">Stock</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="file"
            class="form-control"
            id="productImageStr"
            name="productImageSrt"
            placeholder="productImageStr"
            onChange={mostrarImagen}
            accept="image/*"
          />
          <label for="productImage">Imagen</label>
        </div>
        <div class="mt-4">
          <button class="w-100 btn btn btn-warning" type="submit">
            Agregar producto
          </button>
        </div>
        <div className="mb-3 form-check">
                    
                    <label className="form-check-label" for="isCreate" value={isCreate}>{isCreate}</label>
                </div>
        <div class="mb-3">
          <div class="d-flex justify-content-center">
            <img
              id="productImage"
              src={imagenMiniatura}
              alt="No foto"
              height={150} width={150}
            />
          </div>
        </div>
        </form>
      </div>
    </>
  );
};
