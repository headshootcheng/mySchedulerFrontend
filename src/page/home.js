import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserData, logoutAction } from "../redux/actions/auth";
import { Button } from "@material-ui/core";
const Home = () => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("home", isLoggedIn);
    dispatch(getUserData());
    if (!isLoggedIn || localStorage.getItem("user") === null) {
      history.push("/auth");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <span>Home</span>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
