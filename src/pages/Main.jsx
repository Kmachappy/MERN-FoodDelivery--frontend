import React from "react"
import Signup from "./Signup";
import {  Route, Routes  } from "react-router-dom";
import Signin from "./Signin";
import Nav from "../components/Nav";

export default function Main(){

    const url = "https://localhost:3000/"
    console.log(url+"signup")

    async function createUser(user){
        await fetch(url+"signup",{
            method: 'POST',
            headers:{
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return(
        <>
        <Routes>
            <Route path="/" element={<Signup createUser={createUser}/>}/>
            <Route path="/signin" element={<Signin/>}/>
        </Routes>
        <Nav></Nav>
        </>
    )

}