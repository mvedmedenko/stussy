import s from "./Newsletter.module.css"
import close from "../../../../assets/images/close.svg"
import { useRef, useState } from "react"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

type NewsLetterProps = {
    setIsNewsLetter: (value: boolean) => void
}

interface FormData {
    email: string;
}

const initialValues: FormData = {
    email: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});


const Newsletter = (props: NewsLetterProps) => {

    const [isSubmited, setIsSubmited] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    const onClickHandle = () => {
        props.setIsNewsLetter(false)
    }

    const closeHandle: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === ref.current) {
            props.setIsNewsLetter(false)
        }
    }

    const handleSubmit = (value: FormData) => {
        console.log(value)
        setIsSubmited(true)
    };


    return (
        <div>
            <div ref={ref} onClick={closeHandle} className={s.newsletter}>
                {isSubmited
                    ?
                    <div className={s.submited_inner}>
                        <div className={s.submited_text}>
                            <p className={s.text}>THANK YOU FOR SUBSCRIBING TO STÜSSY.</p>
                            <div onClick={onClickHandle} className={s.close_btn}><img width="15px" height="15px" src={close} alt="X" /></div>
                        </div>
                    </div>
                    :
                    <div className={s.newsletter_inner}>
                        <div className={s.text_box}>
                            <p className={s.text}>SUBSCRIBE FOR NEW PRODUCT ARRIVALS AND EARLY RELEASE INFO</p>
                            <div onClick={onClickHandle} className={s.close_btn}><img width="15px" height="15px" src={close} alt="X" /></div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className={s.form}>
                                    <Field
                                        placeholder="E-MAIL"
                                        className={`${s.input} ${errors.email && touched.email ? s.errorBorder : ''}`}
                                        type="email"
                                        name="email"
                                    />
                                    <div className={s.button_box}>
                                        <button className={s.button} type="submit">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                }
            </div>
        </div>
    )
}

export default Newsletter;