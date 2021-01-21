import React, {useEffect} from "react";
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom";
const Home = () => {
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.isLoggedIn);
    const userInfo = useSelector((state)=>state.userInfo);

    useEffect(() => {
        console.log("home  "+isLoggedIn+ "  " + userInfo);
        if(!isLoggedIn)
            history.push("/auth");
    }, [])

    return(
        <div>
            <span>Home</span>
        </div>
    )
}

export default Home;