import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()
        console.log("Form submitted");
        navigate("/dashboard")
    }
  return (
    <div>
        <form action="" onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="text" name='Username' id ="" />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login