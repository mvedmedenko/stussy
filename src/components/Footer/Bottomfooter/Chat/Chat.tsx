import s from "./Chat.module.css"
import { closeChat } from "../../../../redux/actions/chatActions"
import { useDispatch, } from "react-redux"
import React, { useState } from "react"
import chat from "../../../../assets/images/chat.svg"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormikHelpers } from "formik"
import error from "../../../../assets/images/error-chat.png"

interface FormData {
    name: string;
    email: string;
    message: string;
}

const initialValues: FormData = {
    name: '',
    email: '',
    message: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter a valid name'),
    email: Yup.string().email('Enter a valid email address').required('Enter a valid email address'),
    message: Yup.string().required('Enter a valid message'),
});


const Chat: React.FC = () => {

    const [isSubmited, setIsSubmited] = useState<boolean>(false)
    const dispatch = useDispatch()

    const closeChatHandle = () => {
        dispatch(closeChat())
    }

    const handleSubmit = async (values: FormData, { setSubmitting }: FormikHelpers<FormData>) => {
        console.log(values)
        setIsSubmited(true);
        setSubmitting(false);
    };


    return (
        <div className={s.chat}>
            {isSubmited
                ?
                <div className={s.inner}>
                    <div className={s.title_box}>
                        <div className={s.title}>Stüssy Support</div>
                        <div className={s.close_box} onClick={closeChatHandle}>
                            <span className={s.close}></span>
                        </div>
                    </div>
                    <div className={s.thanks_container}>
                        <div>
                            <img src={chat} alt="" />
                        </div>
                        <div className={s.thanks_text}>
                            <p>Thanks for reaching out</p>
                            <p>Someone will get back to you soon</p>
                        </div>
                        <div className={s.done} onClick={closeChatHandle}>
                            <p>Done</p>
                        </div>
                    </div>
                </div>
                :
                <div className={s.inner}>
                    <div className={s.title_box}>
                        <div className={s.title}>Stüssy Support</div>
                        <div className={s.close_box} onClick={closeChatHandle}>
                            <span className={s.close}></span>
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className={s.form}>
                                <div className={s.text}>
                                    Sorry, we are offline at the moment. <br />
                                    Leave a message and we'll get back to you.
                                </div>
                                <label className={s.input_title}>Name</label>
                                <div className={s.input_box}>
                                    <Field
                                        name="name"
                                        className={`${s.input} ${errors.name && touched.name ? s.error_border : ''}`}
                                        type="text"
                                    />
                                    <div className={s.error_box}>
                                        <img className={errors.name && touched.name ? s.error_img : s.not_error} src={error} alt="!" />
                                        <ErrorMessage name="name" component="div" className={s.error_message} />
                                    </div>
                                </div>
                                <label className={s.input_title}>Email</label>
                                <div className={s.input_box}>
                                    <Field
                                        className={`${s.input} ${errors.email && touched.email ? s.error_border : ''}`}
                                        type="email"
                                        name="email" />
                                    <div className={s.error_box}>
                                        <img className={errors.email && touched.email ? s.error_img : s.not_error} src={error} alt="!" />
                                        <ErrorMessage name="email" component="div" className={s.error_message} />
                                    </div>
                                </div>
                                <label className={s.input_title}>Message</label>
                                <div className={s.input_box}>
                                    <Field
                                        className={`${s.textarea} ${errors.message && touched.message ? s.error_border : ''}`}
                                        as="textarea"
                                        name="message" />
                                    <div className={s.error_box}>
                                        <img className={errors.message && touched.message ? s.error_img : s.not_error} src={error} alt="!" />
                                        <ErrorMessage name="message" component="div" className={s.error_message} />
                                    </div>
                                </div>

                                <div className={s.button_block}>
                                    <button type="submit" disabled={isSubmitting} className={s.button}>Send message</button>
                                </div>
                            </Form>
                        )}
                    </Formik>


                </div>
            }
        </div>
    )
}

export default Chat;