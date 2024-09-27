import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup' 
import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { IUser } from '../../../models/IUser';

const schema = yup.object().shape({
    email: yup.string().required("El correo es un campo obligatorio").email("Correo invalido. Ejemplo: asd@dominio.com"),
    password: yup.string().required("La contrasenia es obligatoria.").min(8,"La contrasenia debe tener al menos 8 caracteres")
})

export const LoginForm = () => {
    const {register,handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitForm = (data:IUser) => {
        console.log(data);

        signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential:UserCredential) => {
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

  return (
    <div>
            <h1>Login Form</h1>
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
            <button type='submit'>Login</button>
        </form>

    </div>
  )
}
