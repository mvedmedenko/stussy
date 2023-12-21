import { useEffect, useState, } from 'react';
import s from "./Login.module.css"
import { checkAuthStatus, loginUser } from '../../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormikHelpers } from "formik"
import ResetPassword from './ResetPassword/ResetPassword';

interface FormData {
    email: string;
    password: string;
}

const initialValues: FormData = {
    email: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid email address')
        .required('Enter a valid email address'),

    password: Yup.string()
        .min(8, 'Must be 15 characters or less')
        .max(20, 'Must be 20 characters or less')
        .required('Enter a valid password'),
});

const Login: React.FC = () => {

    const user = useSelector(state => state.authReducer.isAuth);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [isForgetPassword, setIsForgetPassword] = useState<boolean>(false)
    const [isValidForm, setIsValidForm] = useState<boolean>(false);
    const [fieldFocus, setFieldFocus] = useState<string>("");

    const handleFocus = (fieldName:string) => {
      setFieldFocus(fieldName)
    };
  
    const handleBlur = (fieldName: string) => {
      setFieldFocus(fieldName);
    };

    const handleLogin = (values: FormData, { setSubmitting }: FormikHelpers<FormData>) => {
        const { email, password } = values;
        dispatch(loginUser(email, password));
        setSubmitting(false);
    };

    const handleFormValidity = (isValid: boolean) => {
        setIsValidForm(isValid);
    };


    const handleForgot = () => {
        setIsForgetPassword(!isForgetPassword)
    }

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
                                Please provide the email address and password associated with the account. If you're having trouble, <br />
                                <span>please use the prompt below to reset your password.</span>
                            </p>
                        </div>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                            validateOnChange={true}
                            validateOnBlur={true}
                            validate={(values: FormData) => {
                                validationSchema
                                    .validate(values, { abortEarly: false })
                                    .then(() => {
                                        handleFormValidity(true);
                                    })
                                    .catch(() => {
                                        handleFormValidity(false);
                                    });
                            }}
                        >
                            {({ isSubmitting, errors, touched, values, }) => (
                                <Form className={s.form}>
                                    <div className={s.input_container}>
                                        <Field
                                            className={`${s.input} ${errors.email && touched.email ? s.error_border : ''}`}
                                            type="email"
                                            name="email"
                                            onFocus={() => handleFocus("email")}
                                            onBlur={() => handleBlur("")}
                                        />
                                        <label className={`${s.label} ${fieldFocus !== "email" && values.email.length > 0 ? s.label_animated : ''} ${fieldFocus === 'email' ? s.only_focus : ''}`}>EMAIL</label>
                                    </div>
                                    <div className={s.input_container}>
                                        <Field
                                            className={`${s.input} ${errors.password && touched.password ? s.error_border : ''}`}
                                            type="password"
                                            name="password"
                                            onFocus={() => handleFocus("password")}
                                            onBlur={() => handleBlur("")}
                                        />
                                        <label className={`${s.label} ${fieldFocus !== "password" && values.password.length > 0 ? s.label_animated : ''} ${fieldFocus === 'password' ? s.only_focus : ''}`}>PASSWORD</label>
                                    </div>
                                    <div className={s.btn_box}>
                                        <button 
                                            type="submit"
                                            className={s.signin_btn}
                                            disabled={isSubmitting || !isValidForm}>
                                            SIGN IN
                                        </button>
                                        {isForgetPassword
                                            ? null
                                            :
                                            <button onClick={handleForgot} className={s.forgot_btn} type="button">
                                                FORGOT PASSWORD
                                            </button>
                                        }
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    {isForgetPassword
                        ?
                        <div className={s.forgot_password}>
                            <ResetPassword handleForgot={handleForgot} />
                        </div>
                        :
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
                                    <span>store multiple shipping addresses, view and track your orders in your account, and more.</span>
                                </p>
                            </div>
                            <div>
                                <NavLink to="/account/register">
                                    <button className={s.proceed_btn}>PROCEED TO REGISTER</button>
                                </NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default Login;

