import s from "./ResetPassword.module.css"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormikHelpers } from "formik"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../../../redux/actions/authActions";
import { useState } from "react";

interface ResetPasswordProps {
    handleForgot: () => void,
}

interface FormData {
    email: string;
}

const initialValues: FormData = {
    email: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid email address')
        .required('Enter a valid email address'),
});


const ResetPassword = (props: ResetPasswordProps) => {

    const dispatch = useDispatch();
    const [isSent, setIsSent] = useState<boolean>(false)

    const handleReset = (values: FormData, { setSubmitting }: FormikHelpers<FormData>) => {
        dispatch(resetPassword(values.email))
        setIsSent(true)
        setSubmitting(false);
    }

    const handleForgot = () => {
        props.handleForgot()
    }


    return (
        <div>
                <div>
                    <h2 className={s.title}>
                        FORGOT PASSWORD
                    </h2>
                </div>
                <div>
                    <h3 className={s.subtitle}>
                        REGISTERED USERS
                    </h3>
                </div>
                <div>
                    <p className={s.text}>
                        Please enter your email address below. You will receive a link to reset your password.
                        If you no longer <br /> have access to the email inbox associated with your account,
                        please contact&nbsp;
                        <NavLink to="/pages/customer-support">customer support</NavLink>.
                    </p>
                    {isSent 
                    ? <p className={s.sent_email}>We have sent a link to your email for password reset. Please check it.</p>
                    : null}
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleReset}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className={s.form}>
                            <div className={s.input_container}>
                                <label className={s.label}>EMAIL ADDRESS</label>
                                <Field
                                    className={`${s.input} ${errors.email && touched.email ? s.error_border : ''}`}
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div className={s.btn_box}>
                                <button type="submit" className={s.reset_btn}>
                                    RESET PASSWORD
                                </button>
                                <button type="button" onClick={handleForgot} className={s.cancel_btn}>
                                    CANCEL
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
    )
}

export default ResetPassword;