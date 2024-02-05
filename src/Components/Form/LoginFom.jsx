import React from "react";
import './LoginForm.css';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";


function LoginForm() {
    return (
        <div class="Form">
            <div class="loginform">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username/email" required /> <CiUser class="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="password" required /> <CiLock class="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" name="" id="" /> Remember me</label>
                        <a href="">Forgot password ?</a>
                    </div>
                    <button type='submit'>Login <FaAngleRight className="iconButton" /></button>

                    <div className="register-link">
                        <p>Don't have an account yeat? <a href="">Sign up</a></p>
                    </div>
                </form>
            </div>
            <div class="img"></div>

        </div>
    )
}
export default LoginForm