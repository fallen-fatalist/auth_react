import React, { useContext } from "react"
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton/MyButton";
import { AuthContext } from "../context/contextIndex";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        navigate("/")
    }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login"/>
        <MyInput type="password" placeholder="Enter password"/>
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
};

export default Login;
