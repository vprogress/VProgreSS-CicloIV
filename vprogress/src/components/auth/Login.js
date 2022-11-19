import React, { Fragment, useState } from "react";
import cifrado from "js-sha512"
import jwtDecode from "jwt-decode";
import { ServicioPublico } from "../../app/js/ServicioPublico";
import { ApiBack } from "../../app/js/ApiBack";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState("");

    const [dataLogin, setDataLogin] = useState({
        userMail: "",
        userPass: ""
    })

    const handleChange = (event) =>{
        setDataLogin({
            ...dataLogin,
            [event.target.name]: event.target.value
        })
    }

    const processForm = async (event) => {
        event.preventDefault();

        // const pass = cifrado.sha512(dataLogin.userPass);
        // dataLogin.userPass = pass;
 
        console.log("ToSend: ", dataLogin);
        const resultado = await ServicioPublico.sendPOST(ApiBack.USER_LOGIN, dataLogin);
        console.log(resultado);
        if (resultado.tokenVProgress)
        {
            const objJwtRcb = jwtDecode(resultado.tokenVProgress);
            if (objJwtRcb.codUser)
            {
                localStorage.setItem("tokenVProgress", resultado.tokenVProgress);
                navigate("/Productos");
            }
            else{
                setIsLogged("Error en la autenticación");
            }
        } else{
            setIsLogged("Error en la autenticación");
        }


    }



    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <form onSubmit={processForm}>
                <div className="mb-3">
                    <label for="userMail" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="c" aria-describedby="emailHelp"  name="userMail" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="userPass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="userPass" name="userPass" onChange={handleChange}/>
                </div>
                <div className="mb-3 form-check">
                    
                    <label className="form-check-label" for="isLogged" value={isLogged}>{isLogged}</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}