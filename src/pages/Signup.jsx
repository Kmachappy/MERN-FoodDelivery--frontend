import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Signup({createUser}){
    const [form, setForm] = useState({
        email:"",
        password:""
    })

    function handleChange(event){
        console.log(event.target.name,event.target.value)
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    function handleSubmit(){
        event.preventDefault()

    }


    return(
        <div className='sign-up'>
            <h1>Food Delivery Signup</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="email"
                    placeholder='email'
                    value={form.email}
                    onChange={handleChange}
                    maxLength="50"
                />
                <br />
                <input 
                    type="text" 
                    name="password"
                    placeholder='password'
                    value={form.password}
                    onChange={handleChange}
                    minLength="6"
                    maxLength="32"
                />
                <br />
                <button type='submit'>Sign Up</button>
                <h4>Already have an account? 
                    <Link to={"/signin"}> Sign In</Link> </h4>
            </form>
        </div>
    )
}
