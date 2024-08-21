import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 id="textHi">Holiwis ahora si empezamos</h1>

    <form id="registerForm">
        <section>
            <label>Nombre de usuario:</label>
            <input type="text" id="username" name="username" required>
        </section>

         <section>
            <label>Email:</label>
            <input type="email" id="email" name="email" required>
        </section>

        <section>
            <label>Password:</label>
            <input type="password" id="password" name="password" required>
        </section>

        <section>
            <label>Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
        </section>

        <button type="submit">Registrarse</button>
    </form>

  </div>
`;

const text:HTMLElement = document.querySelector<HTMLElement>('#textHi')!;
text.innerText = "Cambiando con TS";

const form = document.getElementById("registerForm") as HTMLFormElement ;

form.addEventListener('submit',(e:SubmitEvent) => {
    e.preventDefault();

    //Seleccionamos los elementos de HTML, nuestros input
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value;


    //Validacion basica
  if(username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" ){
    alert("Completar todos los campos correctamente");
    return;
  }

    console.log("Funciona");
    console.log(`Los datos del form son: ${username} ,${email}, ${password} y ${confirmPassword}`);
    
  alert("Te registraste correctamente, gracias por tus datos.")
})

