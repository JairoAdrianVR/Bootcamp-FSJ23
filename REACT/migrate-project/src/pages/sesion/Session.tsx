import { RegisterForm } from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
import { useState } from "react"
import { Link } from "react-router-dom";

export const Session = () => {
  const [typeForm,setTypeForm] = useState("");

  return (
    <div>
        <Link to='/'>Regresar</Link> <br/>
        <button onClick={() => {setTypeForm("Login")}}>Log In</button>
        <button  onClick={() => {setTypeForm("Register")}}>Register</button>

        {typeForm === "Login" ? <LoginForm /> : <RegisterForm />}
    </div>
  )
}
