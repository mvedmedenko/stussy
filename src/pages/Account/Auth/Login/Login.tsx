import { useEffect, useState } from 'react';
import s from "./Login.module.css"
import { loginUser } from '../../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const user = useSelector(state => state.authReducer.isAuth);
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(loginUser(email, password))
        setEmail("")
        setPassword("")
    };

    useEffect(() => {
        if (user) {
            navigate("/account")
        }
    }, [user])

    return (
        <div className={s.login}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.login_box}>
                        <div>
                            <h2 className={s.title}>
                                LOGIN
                            </h2>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>
                                REGISTERED CUSTOMERS
                            </h3>
                        </div>
                        <div>
                            <p className={s.text}>
                                Please provide the email address and password associated with the account. If you're having trouble,
                                please use the prompt below to reset your password.
                            </p>
                        </div>

                        <form className={s.form}>
                            <input type="email" placeholder="Email Adress" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                            <button className={s.signin_btn } type="button" onClick={handleLogin}>
                                SIGN IN
                            </button>

                            <button className={s.forgot_btn} type="button">
                                FORGOT PASSWORD
                            </button>


                        </form>
                    </div>
                    <div className={s.register_box}>
                        <div>
                            <h2 className={s.title}>
                                REGISTER
                            </h2>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>
                                NEED AN ACCOUNT?
                            </h3>
                        </div>
                        <div>
                            <p className={s.text}>
                                By creating an account with our store, you will be able to move through the checkout process faster,
                                store multiple shipping addresses, view and track your orders in your account, and more.
                            </p>
                        </div>
                        <div>
                            <NavLink to="/account/register">
                                <button className={s.proceed_btn}>PROCEED TO REGISTER</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;