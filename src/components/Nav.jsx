import React from "react"
import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div className="navbar">
            <Link id="home" to={'/home'}>Home</Link>
            <Link id="browse" to={'/home'}>Browse</Link>
            <Link id="search" to={'/home'}>Search</Link>
            <Link id="cart" to={'/home'}>Cart</Link>
            <Link id="account" to={'/home'}>Account</Link>
        </div>
    )
}