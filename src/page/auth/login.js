import React, {useState} from "react";
import {TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import authService  from "../../service/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const renderMessageBar = () =>{
        switch(status){
            default:
                return null;
            case("success"):
                return <Alert severity="success">{message}</Alert>
            case("error"):
                return <Alert severity="error">{message}</Alert>    
        }
    }

    const postLoginInfo = async() => {
        try{
            const {data} = await authService.loginApi(username,password);
            authService.storeToken(data.token);
        }
        catch(error){
            const {data} = error.response;
            setStatus("error");
            setMessage(data.message);
        }
    }


    const login = e => {
        e.preventDefault();
        const isUsernameCorrect = validateUsernameOrPassword(username);
        const isPasswordCorrect = validateUsernameOrPassword(password);
        if(isPasswordCorrect && isUsernameCorrect){
            postLoginInfo();
        }
    }

    const validateUsernameOrPassword = (input) => {
        const inputWithoutSpace = input.trim();
        if(inputWithoutSpace === ''){
            setStatus("error");
            setMessage("Cannot be blank !!!");
            return false;
        }
        return true;
    }


    return(
        <form className=" h-full flex flex-1 flex-col mx-4 my-4 " onSubmit={login} noValidate>
            {renderMessageBar()}
            <TextField required id="username" label="Username" placeholder="Enter username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <br/>
            <TextField required id="password" label="Password" placeholder="Enter password" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <br/>
            <br/>
            <Button variant="contained" color="secondary" type="submit">
                Login
            </Button>
        </form>
    )
}

export default Login;