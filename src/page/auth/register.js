import React,{ useState } from "react";
import {TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from "axios";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

   
    const postSignUpInfo = async() => {
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`,{
                username:username,
                email:email,
                password:password
            })
            setStatus("success");
            setMessage(data.message);
        }
        catch(error){
            const {data} = error.response;
            setStatus("error");
            setMessage(data.message);
        }
    }

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

    const signup = e => {
        e.preventDefault();
        const isUsernameCorrect = validateUsernameOrPassword(username);
        const isEmailCorrect = validateEmail(email);
        const isPasswordCorrect = validateUsernameOrPassword(password);
        if(isEmailCorrect && isPasswordCorrect && isUsernameCorrect){
            postSignUpInfo();
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

    const validateEmail = (input) => {
        const inputWithoutSpace = input.trim();
        const regex = new RegExp('^\\w+@([a-z]+\\.)+[a-z]{2,4}$')
        const result = regex.test(inputWithoutSpace);
        if(!result){
            setStatus("error");
            setMessage("Wrong Email Format !!!");
            return false;
        }
        return true;
    }


    return(
        <form className=" h-full flex flex-1 flex-col mx-4 my-4 " onSubmit={signup} noValidate>
            {renderMessageBar()}
            <TextField required id="username" label="Username" placeholder="Enter username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <br/>
            <TextField required id="email" label="Email" placeholder="Enter email address" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
            <br/>
            <TextField required id="password" label="Password" placeholder="Enter password" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <br/>
            <br/>
            <Button variant="contained" color="secondary" type="submit">
                Sign Up
            </Button>
        </form>
    )
}

export default Register;