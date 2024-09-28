import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup' 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config';

const schema = yup.object().shape({
    email: yup.string().required("El correo es un campo obligatorio").email("Correo invalido. Ejemplo: asd@dominio.com"),
    password: yup.string().required("La contrasenia es obligatoria.").min(8,"La contrasenia debe tener al menos 8 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref('password')],"Las contrasenias deben coindicidir")
})


export const RegisterForm = () => {
    const {register,handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmitForm = (data) => {
        console.log(data);

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        
        })
        .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        });
    }

    

//SpreadOperator 
  return (
    <>
            <h1>Register Form</h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <section>
                <label>Email</label>
                <input type="email" id="email" placeholder="Email for register" {...register('email')}   />
                <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
            </section>

            <section>
                <label>Password</label>
                <input type="password" id="password" placeholder="Password for register" {...register('password')} />
                <p style={{color:"red"}}>{errors.password && errors.password.message}</p>
            </section>

            <section>
                <label>Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Repeat your password" {...register('confirmPassword')} />
                <p style={{color:"red"}}>{errors.confirmPassword && errors.confirmPassword.message}</p>

            </section>
            <button type='submit'>Register</button>
        </form>
    </>
  )
}
