import React, {useState, useEffect} from "react";
import {TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {loginAction, showAuthErrorBox} from "../../redux/actions/auth"
import {useDispatch, useSelector} from "react-redux"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const authMessageBox = useSelector((state => state.authMessageBox));


    const renderMessageBar = () =>{
        const {type, message} = authMessageBox;
        //console.log("re-render MessageBar");
        switch(type){
            default:
                return null;
            case("success"):
                return <Alert severity="success">{message}</Alert>
            case("error"):
                return <Alert severity="error">{message}</Alert>    
        }
    }


    useEffect(()=>{
        //console.log("re-rendered");
    })

    const login = e => {
        e.preventDefault();
        const isUsernameCorrect = validateUsernameOrPassword(username);
        const isPasswordCorrect = validateUsernameOrPassword(password);
        if(isPasswordCorrect && isUsernameCorrect){
            dispatch(loginAction(username,password));
        }
    }

    const validateUsernameOrPassword = (input) => {
        const inputWithoutSpace = input.trim();
        if(inputWithoutSpace === ''){
            dispatch(showAuthErrorBox("Field cannot be empty !!!"));
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