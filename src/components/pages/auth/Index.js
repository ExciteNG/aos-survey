import React from 'react'
import Register from './Registration/Register'
import Login from './Login/Login'
import { useQueryParam } from "use-query-param";


 
export default function Accounts() {

    const { queryParams } = useQueryParam(window.location.href);
    switch (queryParams.q) {
        case "sign-up":
            return <Register />;
        case "login":
            return <Login />;
        default:
            return <Register />;
    }
}
