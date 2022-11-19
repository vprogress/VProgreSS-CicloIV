import jwtDecode from "jwt-decode";
import React from "react";

export const Authenticate = () => {
    const token = localStorage.getItem("tokenVProgress");
    //console.log("Token: ", token);
    if (token)
    {
        const tokenPrc = jwtDecode(token);
        if (tokenPrc.codUser)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}