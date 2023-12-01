import { NavLink, useNavigate } from "react-router-dom";
import s from "./Register.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../redux/actions/authActions";

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormikHelpers } from "formik"

interface FormData {
    firstName: string,
    lastName: string,
    email: string;
    password: string;
    checkbox: boolean;
}

const initialValues: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checkbox: false,
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Enter a valid First Name'),

    lastName: Yup.string()
        .required('Enter a valid Last Name'),

    email: Yup.string()
        .email('Enter a valid email address')
        .required('Enter a valid email address'),

    password: Yup.string()
        .min(8, 'Must be 15 characters or less')
        .max(20, 'Must be 20 characters or less')
        .required('Enter a valid password'),
});

const Register: React.FC = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.isAuth);
    const navigate = useNavigate()
    const [isValidForm, setIsValidForm] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormData>(initialValues);

    useEffect(() => {
        if (user) {
            navigate("/account")
        }
    }, [user])



    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormValues({ ...formValues, [name]: checked });
    };

    const handleFormValidity = (isValid: boolean) => {
        setIsValidForm(isValid);
    };

    const handleRegister = (values: FormData, { setSubmitting }: FormikHelpers<FormData>) => {
        const name = values.firstName + " " + values.lastName
        dispatch(registerUser(values.email, values.password, name))
        setSubmitting(false)
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
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleRegister}
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
                            {({ isSubmitting, errors, touched }) => (
                                <Form className={s.form}>
                                    <div className={s.input_container}>
                                        <label className={s.label}>FIRST NAME</label>
                                        <Field
                                            className={`${s.input} ${errors.firstName && touched.firstName ? s.error_border : ''}`}
                                            type="text"
                                            name="firstName"
                                        />
                                    </div>
                                    <div className={s.input_container}>
                                        <label className={s.label}>LAST NAME</label>
                                        <Field
                                            className={`${s.input} ${errors.lastName && touched.lastName ? s.error_border : ''}`}
                                            type="text"
                                            name="lastName"
                                        />
                                    </div>
                                    <div className={s.input_container}>
                                        <label className={s.label}>EMAIL ADDRESS</label>
                                        <Field
                                            className={`${s.input} ${errors.email && touched.email ? s.error_border : ''}`}
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className={s.input_container}>
                                        <label className={s.label}>PASSWORD</label>
                                        <Field
                                            className={`${s.input} ${errors.password && touched.password ? s.error_border : ''}`}
                                            type="password"
                                            name="password"
                                        />
                                    </div>
                                    <label className={s.checkbox_label}>
                                        <Field
                                            type="checkbox"
                                            name="checkbox"
                                            onChange={handleCheckboxChange}
                                            checked={formValues.checkbox}
                                        />
                                        <span className={s.checkbox}></span>
                                        AGREE TO&nbsp; <NavLink to="/pages/legal">PRIVACY POLICY</NavLink>&nbsp;AND&nbsp; <NavLink to="/pages/legal">TERMS & CONDITIONS</NavLink>
                                    </label>
                                    <div className={s.btn_box}>
                                        <button
                                            type="submit"
                                            className={s.signin_btn}
                                            disabled={isSubmitting || !isValidForm || !formValues.checkbox}>
                                            SIGN UP
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
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


