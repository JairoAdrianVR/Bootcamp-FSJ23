
export const RegisterForm = () => {
  return (
    <>
        <form>
            <section>
                <label>Email</label>
                <input type="email" id="email" placeholder="Email for register" />
            </section>

            <section>
                <label>Password</label>
                <input type="password" id="password" placeholder="Password for register" />
            </section>

            <section>
                <label>Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Repeat your password" />
            </section>
        </form>
    </>
  )
}
