import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export default function Signup(){
    const navigate = useNavigate()
    const url = "https://food-rojas.herokuapp.com/"
    const [form, setForm] = useState({
        email:"",
        password:""
    })
    const [resp, setResp] = useState(null)
    // console.log(resp|| resp==="sucesss"? null:resp)
    console.log(resp)
    function handleChange(event){
        // console.log(event.target.name,event.target.value)
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
                    type="text" 
                    name="email"
                    placeholder='email'
                    value={form.email}
                    onChange={handleChange}
                    maxLength="50"
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
                />
                <br />
                <button type='submit'>Sign Up</button>
                <h4>Already have an account? 
                    <Link to={"/signin"}> Sign In</Link> </h4>
            </form>
        </div>
    )
}
