import s from "./Customer.module.css"
import { useState } from "react"
import arrow from "../../../assets/images/arrow.svg"
import { customerData } from "./customerData"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { openChat, closeChat } from "../../../redux/actions/chatActions";
import { useEffect } from "react";
import { setNavigationActiveList } from "../../../redux/actions/headerActions";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

interface FormData {
    name: string;
    orderNumber: string;
    email: string;
    selectedOption: string;
    message: string;
}

const initialValues: FormData = {
    name: '',
    orderNumber: '',
    email: '',
    selectedOption: 'PLEASE SELECT',
    message: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    orderNumber: Yup.string().required('Order Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    selectedOption: Yup.string().oneOf(["ORDER STATUS", "RETURN AN ORDER", "ADDRESS UPDATE REQUEST", "SHIPPING/TRACKIN", "REPORT AN ISSUE", "OTHER"]).required(''),
    message: Yup.string().required('Message is required'),
});

const Customer: React.FC = () => {

    const isChat = useAppSelector((state) => state.chatReducer.isChat)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState<string>("")
    const [isSubmited, setIsSubmited] = useState<boolean>(false)

    useEffect(() => {
        dispatch(setNavigationActiveList("support"))
    }, [])

    const chatHandle = () => {
        if (isChat) {
            dispatch(closeChat())
        } else {
            dispatch(openChat())
        }
    }

    const handleSubmit = () => {
        setIsSubmited(true)
    };


    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    {isSubmited
                        ?
                        <div className={s.contact_box}>
                            <div>
                                <h2 className={s.title}>
                                    CONTACT US
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <p className={s.subtitle}>THANK YOU</p>
                                </div>
                                <div>
                                    <p className={s.text}>YOUR SUBMISSION HAS BEEN RECEIVED.</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={s.contact_box}>
                            <div>
                                <h2 className={s.title}>
                                    CONTACT US
                                </h2>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, errors, touched }) => (
                                    <Form className={s.form}>
                                        <Field
                                            name="name"
                                            placeholder="NAME"
                                            className={`${s.input} ${errors.name && touched.name ? s.errorBorder : ''}`}
                                            type="text"
                                        />

                                        <Field
                                            placeholder="ORDER NUMBER"
                                            className={`${s.input} ${errors.orderNumber && touched.orderNumber ? s.errorBorder : ''}`}
                                            type="text"
                                            name="orderNumber"
                                        />

                                        <Field
                                            placeholder="EMAIL"
                                            className={`${s.input} ${errors.email && touched.email ? s.errorBorder : ''}`}
                                            type="email"
                                            name="email" />

                                        <div className={s.select_container}>
                                            <Field as="select" className={`${s.select} ${errors.selectedOption && touched.selectedOption ? s.errorSelect : ''}`} name="selectedOption">
                                                <option value="PLEASE SELECT">PLEASE SELECT</option>
                                                <option value="ORDER STATUS">ORDER STATUS</option>
                                                <option value="RETURN AN ORDER">RETURN AN ORDER</option>
                                                <option value="ADDRESS UPDATE REQUEST">ADDRESS UPDATE REQUEST</option>
                                                <option value="SHIPPING/TRACKIN">SHIPPING/TRACKING</option>
                                                <option value="REPORT AN ISSUE">REPORT AN ISSUE</option>
                                                <option value="OTHER">OTHER</option>
                                            </Field>
                                        </div>

                                        <Field
                                            placeholder="MESSAGE"
                                            className={`${s.textarea} ${errors.message && touched.message ? s.errorBorder : ''}`}
                                            as="textarea"
                                            name="message" />

                                        <div className={s.btn_box}>
                                            <button className={s.submit_btn} type="submit" disabled={isSubmitting}>
                                                SUBMIT
                                            </button>

                                            <button onClick={chatHandle} className={s.chat_btn} type="button">
                                                {isChat ? "CLOSE" : "CHAT"}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div>
                                <div className={s.cotact_subtitle}>
                                    CONTACT
                                </div>
                                <div className={s.email_box}>
                                    <a className={s.email} href="mailto:support@stussy.com">support@stussy.com</a>
                                </div>
                                <div className={s.subtitle}>
                                    CUSTOMER SUPPORT HOURS
                                </div>
                                <div>
                                    <p className={s.email_text}>
                                        Monday – Friday 8:00am - 4:00pm PST <br />
                                        Excluding the weekend and major holidays.
                                    </p>
                                </div>
                            </div>
                        </div>}
                    <div className={s.frequently_box}>
                        <div>
                            <h2 className={s.title}>
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                        </div>
                        <div className={s.questions_box}>
                            {customerData.map((item) => {
                                return <div key={item.id} className={s.dropdown} onClick={() => setOpen(open === item.id ? "" : item.id)}>
                                    <div className={s.subtitle_box}>
                                        <h3 className={s.dropdown_title}>{item.title}</h3>
                                        <span>
                                            <img
                                                width="7px"
                                                height="8px"
                                                src={arrow}
                                                alt="arrow"
                                                className={open === item.id ? s.arrow_active : s.arrow}
                                            />
                                        </span>
                                    </div>
                                    {open === item.id
                                        ? <p className={s.text}>{item.text}</p>
                                        : null}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer;
