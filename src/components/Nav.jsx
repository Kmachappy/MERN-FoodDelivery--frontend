import React from "react"
import { Link } from "react-router-dom"
import './Nav.css'

export default function Nav(){
    return(
        <div className="navbar">
            <Link id="home" to={'/home'}>Home</Link>
            <Link id="browse" to={'/browse'}>Browse</Link>
            <Link id="search" to={'/searc'}>Search</Link>
            <Link id="cart" to={'/cart'}>Cart</Link>
            <Link id="account" to={'/account'}>Account</Link>
        </div>
    )
}