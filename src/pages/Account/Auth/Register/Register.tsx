import { NavLink, useNavigate } from "react-router-dom";
import s from "./Register.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../redux/actions/authActions";

const Register = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.isAuth);
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user) {
            navigate("/account")
        }
    }, [user])

    const handleRegister = () => {
        const name = firstName + " " + lastName
        dispatch(registerUser(email, password, name))
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
    };

    return (
        <div className={s.login}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.register_box}>
                        <div>
                            <h2 className={s.title}>
                                REGISTER
                            </h2>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>
                                NEW CUSTOMERS
                            </h3>
                        </div>
                        <div>
                            <p className={s.text}>
                                By creating an account with our store, you will be able to move through the checkout process faster, store
                                multiple shipping addresses, view and track your orders in your account and more.
                            </p>
                        </div>

                        <form className={s.form}>
                            <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                            <button className={s.register_btn} type="button" onClick={handleRegister}>
                                SIGN UP
                            </button>

                        </form>
                    </div>
                    <div className={s.login_box}>
                        <div>
                            <h2 className={s.title}>
                                LOGIN
                            </h2>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>
                                HAVE AN ACCOUNT?
                            </h3>
                        </div>
                        <div>
                            <p className={s.text}>
                                Please provide the email address and password associated with the account.
                                If you’re having troubles, please use the prompt below to reset your password.
                            </p>
                        </div>
                        <div>
                            <NavLink to="/account/login">
                                <button className={s.proceed_btn}>PROCEED TO LOGIN</button>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
