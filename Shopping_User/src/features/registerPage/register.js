import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAuthAsync } from '../../api/axiosClient';
import '../registerPage/register.css'
function Register() {
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');

    const [errorState, seterrorState] = useState({ fullname: "fullname is empty", email: "email is empty", address: " address is empty", password: "password is empty", phone: "phone is empty", isError: false });
    const navigate = useNavigate()

    async function handleSubmit() {
        const userInfo = {
            email: email,
            fullName: fullname,
            address: address,
            phone: phone,
            password: password
        }

        console.log(userInfo);
        // const result = await registerAuthAsync(userInfo);
        // console.log(result);
        // if (result.status == 200) {
        //     navigate('/home');
        // }

    }
    function inputValidateFullName(value) {
        if (String(value).length == 0) {
            seterrorState(lastState => ({
                ...lastState,
                fullname: "fullname is empty",
                isError: true
            }))
        } else {
            seterrorState(lastState => ({
                ...lastState,
                fullname: "",
                isError: false
            }))
        }
    }
    function inputValidateEmail(value) {
        if (String(value).length == 0) {
            seterrorState(lastState => ({
                ...lastState,
                email: "email is empty",
                isError: true
            }))
        } else {
            seterrorState(lastState => ({
                ...lastState,
                email: "",
                isError: false
            }))
        }
    }
    function inputValidateAddress(value) {
        if (String(value).length == 0) {
            seterrorState(lastState => ({
                ...lastState,
                address: "address is empty",
                isError: true
            }))
        } else {
            seterrorState(lastState => ({
                ...lastState,
                address: "",
                isError: false
            }))
        }
    }
    function inputValidatePassword(value) {
        if (String(value).length == 0) {
            seterrorState(lastState => ({
                ...lastState,
                password: "password is empty",
                isError: true
            }))
        } else {
            seterrorState(lastState => ({
                ...lastState,
                password: "",
                isError: false
            }))
        }
    }
    function inputValidatePhone(value) {
        if (String(value).length == 0) {
            seterrorState(lastState => ({
                ...lastState,
                phone: "phone is empty",
                isError: true
            }))
        } else {
            seterrorState(lastState => ({
                ...lastState,
                phone: "",
                isError: false
            }))
        }
    }
    return (
        <div>
            <div className="body">
                <div className="container-css" id="container">
                    <div className="form-container sign-in-container">
                        <h1 className="h1-css">Sign Up</h1>
                        <input className="input" type="text" placeholder="Full Name" onChange={(e) => setfullname(e.target.value)} onBlur={(e) => inputValidateFullName(e.target.value)} value={fullname} />
                        <p>{errorState.fullname}</p>
                        <input className="input" type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} onBlur={(e) => inputValidateEmail(e.target.value)} value={email} />
                        <p>{errorState.email}</p>
                        <input className="input" type="text" placeholder="Address" onChange={(e) => setaddress(e.target.value)} onBlur={(e) => inputValidateAddress(e.target.value)} value={address} />
                        <p>{errorState.address}</p>
                        <input className="input" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} onBlur={(e) => inputValidatePassword(e.target.value)} value={password} />
                        <p>{errorState.password}</p>
                        <input className="input" type="number" placeholder="Phone" onChange={(e) => setphone(e.target.value)} onBlur={(e) => inputValidatePhone(e.target.value)} value={phone} />
                        <p>{errorState.phone}</p>
                        <button className="button-css" onClick={() => handleSubmit()} disabled={errorState.isError} >Sign Up</button>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                {/* <h1>Join with us!</h1> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register