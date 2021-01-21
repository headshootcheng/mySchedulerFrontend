import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import "../style/output.css"
import { ButtonGroup, Button } from '@material-ui/core';
import { useSelector } from "react-redux"
import Register from "./auth/register";
import Login from "./auth/login";

const Auth = () => {
    const history = useHistory();
    const [page, setPage] = useState("login");
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    useEffect(()=>{
        console.log("auth "+isLoggedIn);
        if(isLoggedIn){
            history.push("/");
        }
    },[isLoggedIn])

    const renderPage = () =>{
        switch(page){
            case "login":
                return <Login/>
             case "register":
                return <Register/>
            default:
                return <Login/>
        }
    }
    return(
        <div className="h-screen flex  flex-col  justify-center items-center">
            <div className="border-black  rounded-md  border-2  h-3/6 w-1/2">
                <ButtonGroup color="primary" variant="contained" className = "w-full h-20">
                    <Button className="w-1/2" color="primary" variant={`${page==="login"?"contained":"outlined"}`} onClick={()=>{setPage("login")}}>Login</Button>
                    <Button className="w-1/2" color="primary"  variant={`${page==="register"?"contained":"outlined"}`} onClick={()=>{setPage("register")}}>Register</Button>
                </ButtonGroup>
                {renderPage()}
            </div>
        </div>
    )
}

export default Auth;
