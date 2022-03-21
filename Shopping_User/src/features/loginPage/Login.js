import React from "react"
import { useRef, useState, useEffect } from "react"
import AuthContext from "../../context/AuthProvider";
import "../../features/loginPage/login.css"
import { getDetailUserByEmailAsync, loginAuthAsync } from "../../api/axiosClient";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { TOKEN, USER_EMAIL, USER_ID, DATA_USER } from '../../constant/Constant';

const LOGIN_URL = '/auth';

const Login = () => {
 

    return (
        <div className="body">
            <div className="container-css" id="container">
                <p  aria-live="assertive"></p>
                <div className="form-container sign-in-container">
                    <form>
                        <h1 className="h1-css">Sign in</h1>
                        <div className="social-container">
                            <a href="https://www.facebook.com/" className="a-css"> <IoLogoFacebook className="icon" /></a>
                            <a href="https://www.google.com/" className="a-css"><IoLogoGoogle className="icon" /></a>
                            <a href="https://www.linkedin.com/login" className="a-css"><IoLogoLinkedin className="icon" /></a>
                        </div>
                        <span className="span-css">or use your account</span>
                        <input className="input" type="email" placeholder="Email" id="email" />
                        <p></p>
                        <input className="input" type="password" placeholder="Password" id="password"  />
                        <p></p>
                        <a className="a-css" href="#">Forgot your password?</a>
                        {/* <p>{errorStart.isError == true ? "aloalo" : "none"}</p> */}

                        <button className="button-css" >Sign In</button>
                    </form>

                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            {/* <h1>Welcome back!</h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login