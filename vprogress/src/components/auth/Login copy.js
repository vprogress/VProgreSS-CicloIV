import React from "react";
import cifrado from "js-sha512"
import jwtDecode from "jwt-decode";
import { ServicioPublico } from "../../app/js/ServicioPublico";
import { ApiBack } from "../../app/js/ApiBack";

export const Login = () => {

    const processForm = async () => {
        const user = document.getElementById("userMail");
        const pass = cifrado.sha512(document.getElementById("userPass"));
        const toSend = {
            userMail: user,
            userPass: pass
        }
        console.log("ToSend: ", toSend);
        const resultado = await ServicioPublico.sendPOST(ApiBack.USER_LOGIN, toSend);
        if (resultado.tokenVProgress)
        {
            const objJwtRcb = jwtDecode(resultado.tokenVProgress);
            if (objJwtRcb.codUser)
            {
                localStorage.setItem("tokenVProgress", resultado.tokenVProgress);
                window.location(ApiBack.INICIO);
            }
        }


    }



    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <form onSubmit={processForm}>
                <div className="mb-3">
                    <label for="userMail" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="userMail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="userPass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="userPass" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}