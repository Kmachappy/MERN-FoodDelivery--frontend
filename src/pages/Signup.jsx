import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export default function Signup(){
    const navigate = useNavigate()
    const url = "https://food-rojas.herokuapp.com/"
    
    const [resp, setResp] = useState(null)
    const [form, setForm] = useState({
        email:"",
        password:""
    })
    
    console.log(resp)
    function handleChange(event){
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }
    
    async function handleSubmit(event){
        event.preventDefault()
        try {
            const resp = await axios.post(url+'signup',
            {email:form.email, password:form.password})
            const message = resp.data.message
            setResp(message)
            if(message == "success"){ navigate('/account')}
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <div className='sign-up'>
            <h1>Food Delivery Signup</h1>
            {resp !== "success"? <h4>{resp}</h4>: null }
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    name="email"
                    placeholder='email'
                    value={form.email}
                    onChange={handleChange}
                    maxLength="50"
                    required
                />
                <br />
                <input 
                    type="password" 
                    name="password"
                    placeholder='password'
                    value={form.password}
                    onChange={handleChange}
                    minLength="6"
                    maxLength="32"
                    required
                />
                <br />
                <button type='submit'>Sign Up</button>
                <h4>Already have an account? 
                    <Link to={"/signin"}> Sign In</Link> </h4>
            </form>
        </div>
    )
}
