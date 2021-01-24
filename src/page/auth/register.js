import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { registerUserAction, showAuthErrorBox } from "../../redux/actions/auth";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authMessageBox = useSelector((state) => state.authMessageBox);

  const renderMessageBar = () => {
    const { type, message } = authMessageBox;
    switch (type) {
      default:
        return null;
      case "success":
        return <Alert severity="success">{message}</Alert>;
      case "error":
        return <Alert severity="error">{message}</Alert>;
    }
  };

  const signup = (e) => {
    e.preventDefault();
    const isUsernameCorrect = validateUsernameOrPassword(username);
    const isEmailCorrect = validateEmail(email);
    const isPasswordCorrect = validateUsernameOrPassword(password);
    if (isEmailCorrect && isPasswordCorrect && isUsernameCorrect) {
      dispatch(registerUserAction(username, email, password));
    }
  };

  const validateUsernameOrPassword = (input) => {
    const inputWithoutSpace = input.trim();
    if (inputWithoutSpace === "") {
      dispatch(showAuthErrorBox("Field cannot be empty !!!"));
      return false;
    }
    return true;
  };

  const validateEmail = (input) => {
    const inputWithoutSpace = input.trim();
    const regex = new RegExp("^\\w+@([a-z]+\\.)+[a-z]{2,4}$");
    const result = regex.test(inputWithoutSpace);
    if (!result) {
      dispatch(showAuthErrorBox("Wrong Email Format"));
      return false;
    }
    return true;
  };

  return (
    <form
      className=" h-full flex flex-1 flex-col mx-4 my-4 "
      onSubmit={signup}
      noValidate
    >
      {renderMessageBar()}
      <TextField
        required
        id="username"
        label="Username"
        placeholder="Enter username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <TextField
        required
        id="email"
        label="Email"
        placeholder="Enter email address"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />
      <TextField
        required
        id="password"
        label="Password"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <br />
      <Button variant="contained" color="secondary" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
