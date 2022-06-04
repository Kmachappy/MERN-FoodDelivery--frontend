import React from "react"
import Signup from "./Signup";
import {  Route, Routes  } from "react-router-dom";
import Signin from "./Signin";
import Home from "./Home";
import Account from "./Account";

export default function Main(){



    return(
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/account" element={<Account/>}/>
        </Routes>
        
        </>
    )

}