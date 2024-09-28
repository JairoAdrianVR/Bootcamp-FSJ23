import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup' 
import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { IUser } from '../../../models/IUser';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().required("El correo es un campo obligatorio").email("Correo invalido. Ejemplo: asd@dominio.com"),
    password: yup.string().required("La contrasenia es obligatoria.").min(8,"La contrasenia debe tener al menos 8 caracteres")
})

export const LoginForm = () => {
    const {register,handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmitForm = (data:IUser) => {
        //console.log(data);

        signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential:UserCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user);
    setCurrentUser(user);
    navigate('/');

  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });
    }

  return (
    <div className='container'>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)} >
            <section>
                <label className='form-label'>Email</label>
                <input className='form-control' type="email" id="email" placeholder="Email for register" {...register('email')}   />
                <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
            </section>

            <section>
                <label className='form-label'>Password</label>
                <input className='form-control' type="password" id="password" placeholder="Password for register" {...register('password')} />
                <p style={{color:"red"}}>{errors.password && errors.password.message}</p>
            </section>
            <button type='submit' className='btn btn-primary col-6'>Login</button>
        </form>

    </div>
  )
}
