import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ApiBack } from "../../app/js/ApiBack";
import { ServicioPublico } from "../../app/js/ServicioPublico";
import { DataContext } from "../../context/Dataprovider";
import { Authenticate } from "../auth/Authenticate";




export const EditProducto = () => {

  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  const valoresCampos = () =>{

  };

//  productos.filter((elemento) => { return (productos.id == )})

//Definicion de variables
const [isUpdate, setIsUpdate] = useState("");
const [isLoading, setIsLoading] = useState(true);
let {codigo}=useParams();
const [dataProduct, setDataProduct] = useState({
  _id: "",
  productName: "",
    productDescription:"",
    productStock: "",
    productValue: "",
    productImage: "",
});

const obtenerProducto = async () => {
  const url=ApiBack.PRODUCT_ONE_PRODUCT + "/" + codigo;
  const resultado = await ServicioPublico.sendGET(url);
  console.log(url, "dataProduct: ", resultado);
  if (resultado)
  {
    dataProduct._id= resultado._id;
    dataProduct.productName= resultado.productName;
    dataProduct.productDescription= resultado.productDescription;
    dataProduct.productStock= resultado.productStock;
    dataProduct.productValue= resultado.productValue;
    dataProduct.productImage= resultado.productImage;
    setIsLoading(false);
  
  }
  
}


const processForm = async (event) => {
  event.preventDefault();

  const url = ApiBack.PRODUCT_EDIT + "/" + dataProduct._id;
  const resultado = await ServicioPublico.sendPOST(url, dataProduct);
  console.log(resultado);
  if (resultado.profileNew)
  {
      setIsUpdate("Producto Actualizado Exitosamente");
  }else{
    setIsUpdate("Producto no se pudo actualizar");
  }


}

if (!Authenticate()){
  Navigate("/Login");
}

useEffect(() => {
  obtenerProducto();
}, []);

const handleChange = (event) =>{
  setDataProduct({
      ...dataProduct,
      [event.target.name]: event.target.value
  })
}

if (isLoading)
{
  return (
    <div className="App">
      <br/><br/><br/><br/><br/><br/><br/>
    <h1>Cargando...</h1>
  </div>
  );
}

//Hasta


  return (
    <>
      <div>
      <br/><br/><br/><br/>
        <div>
          <h1>Editar Producto</h1>
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
            id="productImage"
            name="productImage"
            placeholder="productImage"
            onChange={handleChange}
            accept="image/*"
          />
          <label for="productImage">Imagen</label>
        </div>
        <div class="mt-4">
          <button class="w-100 btn btn btn-warning" type="submit">
            Actualizar producto
          </button>
        </div>
        <div className="mb-3 form-check">
                    
                    <label className="form-check-label" for="isUpdate" value={isUpdate}>{isUpdate}</label>
                </div>
        <div class="mb-3">
          <div class="d-flex justify-content-center">
            <img
              id="fotArtYa"
              src="src/assets/images/noFoto.png"
              class="maximoInterprete"
              alt="No foto"
            />
          </div>
        </div>
        </form>
      </div>
    </>
  );
};
