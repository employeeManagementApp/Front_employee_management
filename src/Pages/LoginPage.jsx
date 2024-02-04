import React from "react";
import '../Components/Header/Header.jsx';
import Header from "../Components/Header/Header.jsx";
import LoginForm from "../Components/Form/LoginFom.jsx";

const LoginPage = ()=> {
    return(
      <div>
      <Header></Header>
     <main>
      <LoginForm></LoginForm>
     </main>
     </div>
    )
}

export default LoginPage