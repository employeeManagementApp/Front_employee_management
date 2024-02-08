import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './LoginForm.css';
import axios from 'axios';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

function LoginForm(){
   const navigate = useNavigate()
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const [user, setUser] = useState({
   })
   const [err, setErr]=useState()

   const handleSubmit = async (e) => {
       e.preventDefault();
       try{
           const response = await axios.post(`${baseUrl}/user/login`, {
               email: user.email,
               password: user.password
           })
           const tokenString = JSON.stringify(response.data);
           localStorage.setItem('ematoken', tokenString)
           //console.log(response.data)
           console.log(tokenString)
           const decodedToken = jwtDecode(response.data)
           if(decodedToken.role == 'Employe'){
            navigate('/page')
           }else{
            navigate('/backoffice')
           }
       }catch(err){
           console.log(err)
           setErr(err)
       }
   }
   return (
  <div class="Form">
   <div class="loginform">
       <form action="" onSubmit={handleSubmit}>
           <h1>Login</h1>
           <div className="input-box">
               <input type="text" placeholder="Username/email" required value = {user.email} onChange={e=>{
                   setUser({...user, email: e.target.value})
               }} /> <CiUser class="icon" />
           </div>
           <div className="input-box">
               <input type="password" placeholder="password" required value={user.password} onChange={e=>{
                   setUser({...user, password: e.target.value})
               }} /> <CiLock class="icon" />
           </div>
           <div className="remember-forgot">
               <label><input type="checkbox" name="" id="" /> Remember me</label> 
               <a href="">Forgot password ?</a>
           </div>
           {err && (
            <p className="error-message">Email or password is wrong</p>
           )}
           <button type='submit'>Login <FaAngleRight className="iconButton" /></button>

          {/*<div className="register-link">
                       <p>Don't have an account yeat? <a href="">Sign up</a></p>
                   </div>*/}
       </form>
   </div>
   <div class="img"></div>

  </div>
)
}
export default LoginForm