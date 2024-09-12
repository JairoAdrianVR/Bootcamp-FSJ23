import * as yup from 'yup'
import {useForm} from 'react-hook-form'

const schema = yup.object().shape({
    email: yup.string().required("El correo es un campo obligatorio").email("Correo invalido. Ejemplo: asd@dominio.com"),
    password: yup.string().required("La contrasenia es obligatoria.").min(8,"La contrasenia debe tener al menos 8 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],"Las contrasenias deben coindicidir")
})


export const RegisterForm = () => {
    const {register} = useForm();
    
//SpreadOperator 
  return (
    <>
        <form>
            <section>
                <label>Email</label>
                <input type="email" id="email" placeholder="Email for register" {...register('email')} />
            </section>

            <section>
                <label>Password</label>
                <input type="password" id="password" placeholder="Password for register" {...register('password')} />
            </section>

            <section>
                <label>Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Repeat your password" {...register('confirmPassword')} />
            </section>
        </form>
    </>
  )
}
