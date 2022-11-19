import React from "react";
import { ApiBack } from "./ApiBack";

export class ServicioPublico {


    static async sendGET(urlRequest)
    {
        const datosConsultaBackend = {
            method: "GET",
            headers: {"Content-Type": "application/json; charset=UTF-8"} 
        };
        const url = ApiBack.URL + urlRequest;
        const respuesta = fetch(url, datosConsultaBackend)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }

    static async sendDELETE(urlRequest)
    {
        const datosConsultaBackend = {
            method: "DELETE",
            headers: {"Content-Type": "application/json; charset=UTF-8"} 
        };
        const url = ApiBack.URL + urlRequest;
        const respuesta = fetch(url, datosConsultaBackend)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }

    static async sendPOST(urlRequest, misDatos)
    {
        const datosConsultaBackend = {
            method: "POST",
            body: JSON.stringify(misDatos),
            headers: {"Content-Type": "application/json; charset=UTF-8"} 
        };
        const url = ApiBack.URL + urlRequest;
        console.log(url);
        console.log(misDatos);

        const respuesta = fetch(url, datosConsultaBackend)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }

    static async sendPUT(urlRequest, misDatos)
    {
        const datosConsultaBackend = {
            method: "PUT",
            body: JSON.stringify(misDatos),
            headers: {"Content-Type": "application/json; charset=UTF-8"} 
        };
        const url = ApiBack.URL + urlRequest;
        const respuesta = fetch(url, datosConsultaBackend)
        .then((respuesta) => respuesta.json())
        .then( (datos) => { return datos; })
        .catch( (miError) => { return miError; });
        return respuesta;
    }


}