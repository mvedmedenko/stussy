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
    const [isCheckbox, setIsCheckBox] = useState(false)

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
        <div className={s.register}>
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
                                By creating an account with our store, you will be able to move through the checkout process faster, <br />
                                <span>store multiple shipping addresses, view and track your orders in your account and more.</span>
                            </p>
                        </div>

                        <form className={s.form}>
                            <div className={s.input_container}>
                                <label className={s.label}>FIRST NAME</label>
                                <input className={s.input} type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className={s.input_container}>
                                <label className={s.label}>LAST NAME</label>
                                <input className={s.input} type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div className={s.input_container}>
                                <label className={s.label}>EMAIL ADDRESS</label>
                                <input className={s.input} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className={s.input_container}>
                                <label className={s.label}>PASSWORD</label>
                                <input className={s.input} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <label className={s.checkbox_label}>
                                <input onChange={() => setIsCheckBox(!isCheckbox)} type="checkbox"/>
                                    <span className={s.checkbox}></span>
                                    AGREE TO PRIVACY POLICY AND TERMS & CONDITIONS
                            </label>

                            <button disabled={true} className={s.register_btn} type="button" onClick={handleRegister}>
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
                                Please provide the email address and password associated with the account. If you’re having troubles,
                                <span>please use the prompt below to reset your password.</span>
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


