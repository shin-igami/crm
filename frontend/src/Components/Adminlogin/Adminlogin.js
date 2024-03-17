import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"; 
import './Adminlogin.css'
function Adminlogin() {

    const [credential, setcredential] = useState({ phone: "", password: "" });
    // let navigate = useNavigate();
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5001/api/auth/login", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone: credential.phone, password: credential.password })
              });
              const json = await response.json()
              console.log(json,response.status)
              if (response.status===200) {
                localStorage.setItem("token", response.json)
                console.log(localStorage.getItem("token"))
                // navigate('/home')
              }
              else {
                alert("invalid cerdential")
                
              }
            
        } catch (error) {
            console.log(error)
        }
       

    }
    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
      }

  return (
    <div>
       <section class="container">
        
        <div class="login-container">
            <div class="circle circle-one"></div>
            <div class="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
                <h1 class="opacity">ADMIN LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' id='phone' name='phone' value={credential.phone} onChange={onchange} placeholder="PHONE NO" />

                    <input type="password" id='password' name='password' value={credential.password} onChange={onchange} placeholder="PASSWORD" />
                    <button class="opacity" type='submit'>SUBMIT</button>
                </form>
                <div class="register-forget opacity">
                    <a href="">REGISTER</a>
                    <a href="">FORGOT PASSWORD</a>
                </div>
            </div>
            <div class="circle circle-two"></div>
        </div>
        <div class="theme-btn-container"></div>
    </section>
    </div>
  )
}

export default Adminlogin
