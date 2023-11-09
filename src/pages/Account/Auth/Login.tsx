import React, { useState } from 'react';
import { account } from "../../../lib/appwrite/appwrite";
import s from "./Login.module.css"

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login(email: string, password: string) {
        await account.createEmailSession(email, password);
        setLoggedInUser(await account.get());
    }

    return (
        <div className={s.login}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.login_box}>
                        <h2>
                            LOGIN
                        </h2>
                        <h3>
                            REGISTERED CUSTOMERS
                        </h3>
                        <p>
                            Please provide the email address and password associated with the account. If you're having trouble, 
                            please use the prompt below to reset your password.
                        </p>

                        <form>
                            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                            <button type="button" onClick={() => login(email, password)}>
                                Login
                            </button>

                        </form>
                    </div>
                    <div className={s.register_box}>
                        <h2>
                            REGISTER
                        </h2>
                        <h3>
                            NEED AN ACCOUNT?
                        </h3>
                        <p>
                            By creating an account with our store, you will be able to move through the checkout process faster, 
                            store multiple shipping addresses, view and track your orders in your account, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

