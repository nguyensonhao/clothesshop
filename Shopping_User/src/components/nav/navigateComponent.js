import React, { useEffect, useState } from 'react'
import '../../features/homePage/Homepage.css'
import { Link, useLocation } from 'react-router-dom'
import { connect } from "react-redux";
function NavigateComponent() {
    const {pathname} = useLocation()
    const [navState, setnavState] = useState({
        isHome: true,
        isProduct: false,
        isAbout: false,
        isContact: false,
        isCart: false
    });

    function checkToken() {
        const token = sessionStorage.getItem("token")
        if (token) {
            return true;
        } else {
            return false
        }
    }

    function selectNav(link) {
        switch (link) {
            case "/products":
                setnavState({
                    ...navState,
                    isProduct: true,
                    isHome: false
                })
                break;
            case "/aboutUs":
                setnavState({
                    ...navState,
                    isAbout: true,
                    isHome: false
                })
                break;
            case "/ContactUspage":
                setnavState({
                    ...navState,
                    isContact: true,
                    isHome: false
                })
                break;
            case "/home":
                setnavState({
                    ...navState,
                    isHome: true

                })
                break;
            case "/cart":
                setnavState({
                    ...navState,
                    isCart: true,
                    isHome: false

                })
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        checkToken()
        selectNav(pathname)
    }, []);
    return (
        < div >
            <header >
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <Link to={"/home"} class="navbar-brand" ><h2>TT <em>Shop</em></h2></Link>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class={`nav-item  ${navState.isHome ? "active" : ""}`}>
                                    <Link to={"/home"} class="nav-link"> Home </Link>
                                </li>
                                <li class={`nav-item  ${navState.isProduct ? "active" : ""}`}>
                                    <Link to={"/products"} class="nav-link"> Our Products </Link>
                                </li>
                                <li class={`nav-item  ${navState.isAbout ? "active" : ""}`}>
                                    <Link to={"/aboutUs"} class="nav-link">About Us</Link>  
                                </li>
                                <li class={`nav-item  ${navState.isContact ? "active" : ""}`}>
                                    <Link to={"/ContactUspage"} class="nav-link">Contact Us</Link>
                                </li>
                                {checkToken() ? "" : <li class="nav-item">
                                    <Link to={"/login"} className="nav-link">Login</Link>
                                </li>}
                                {checkToken() ? "" : <li class="nav-item">
                                    <Link to={"/register"} class="nav-link">Register</Link>
                                </li>}
                                <li class={`nav-item  ${navState.isCart ? "active" : ""}`}>
                                    <Link to={"/cart"} class="nav-link">Cart <i class="fa-duotone fa-cart-shopping"></i></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        navType: state.nav
    }
}
const mapDispatchToPros = dispatch => {
    return {
        setNavPos: (payload) => dispatch({
            type: 'getData',
            payload: payload
        })
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(NavigateComponent)
