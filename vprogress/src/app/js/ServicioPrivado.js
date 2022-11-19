import React from "react";
import { ApiBack } from "./ApiBack";

export class ServicioPrivado {


    static async sendGET(urlRequest)
    {
        const token = "Bearer " + String(localStorage.getItem("tokenVProgress"));
        const datosEnviar = {
            method: "GET",
            headers: {"Content-Type": "application/json; charset=UTF-8", authorization: token} 
        };
        const url = ApiBack.URL + urlRequest;
        const respuesta = fetch(url, datosEnviar)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }

    static async sendDELETE(urlRequest)
    {
        const token = "Bearer " + String(localStorage.getItem("tokenVProgress"));
        const datosEnviar = {
            method: "DELETE",
            headers: {"Content-Type": "application/json; charset=UTF-8", authorization: token} 
        };
        const url = ApiBack.URL + urlRequest;
        const respuesta = fetch(url, datosEnviar)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }

    static async sendPOST(urlRequest, misDatos)
    {
        const token = "Bearer " + String(localStorage.getItem("tokenVProgress"));
        const datosEnviar = {
            method: "POST",
            body: JSON.stringify(misDatos),
            headers: {"Content-Type": "application/json; charset=UTF-8", authorization: token} 
        };
        const url = ApiBack.URL + urlRequest ;
        console.log(url);
        console.log(misDatos);

        const respuesta = fetch(url, datosEnviar)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }

    static async sendPUT(urlRequest, misDatos)
    {
        const token = "Bearer " + String(localStorage.getItem("tokenVProgress"));
        const datosEnviar = {
            method: "PUT",
            body: JSON.stringify(misDatos),
            headers: {"Content-Type": "application/json; charset=UTF-8", authorization: token} 
        };
        const url = ApiBack.URL + urlRequest;
        const respuesta = fetch(url, datosEnviar)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }


}