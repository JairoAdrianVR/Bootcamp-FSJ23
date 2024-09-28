import { RegisterForm } from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
import { useState } from "react"

export const Session = () => {
  const [typeForm,setTypeForm] = useState("");

  return (
    <div className="card">
      <section className="row justify-content-center">
        <button className=" col-4 m-2" onClick={() => {setTypeForm("Login")}}>Log In</button>
        <button className=" col-4 m-2" onClick={() => {setTypeForm("Register")}}>Register</button>
        </section>
        {typeForm === "Login" ? <LoginForm /> : <RegisterForm />}
    </div>
  )
}
