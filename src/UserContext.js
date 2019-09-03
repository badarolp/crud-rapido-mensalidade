import React from "react";

import axios from "axios";

import { loginAuth, logoutAuth, getToken, isAuthenticated } from "./auth";

const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});



export { loginUser };

// ###########################################################
function loginUser() {    
    try {
        instance({
            method: 'post',
            url: '/login',
            data: {
                email: 'ricardo@mensalidade',
                password: '1234'
            }
        }).then(response => {
            console.log("ok");
            loginAuth(response.data.access_token);
            // history.push("/app/mensalidades");
            // history.push("/courses");
        }).catch(error => {
            // this.setState({ error: error });
            console.log(error);
        });
    } catch (err) {
        console.log(err);
    }
}
