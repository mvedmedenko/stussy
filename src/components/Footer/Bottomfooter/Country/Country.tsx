import s from "./Country.module.css"
import close from "../../../../assets/images/close.svg"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useRef } from "react";


interface FormData {
    selectedOption: string;
}

const initialValues: FormData = {
    selectedOption: 'CANADA / CAD',
};

const validationSchema = Yup.object().shape({
    selectedOption: Yup.string().required('Message is required'),
});

type CountryProps = {
    setIsCountry: (value: boolean) => void
}

const Country = (props: CountryProps) => {

    const ref = useRef<HTMLDivElement>(null)

    const closeHandle: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if(e.target === ref.current) {
            props.setIsCountry(false)
        }
    }

    const handleSubmit = (values: FormData) => {
        console.log(values)
        props.setIsCountry(false)
    };

    const onClickHandle = () => {
        props.setIsCountry(false)
    }

    return (
        <div onClick={closeHandle} ref={ref} className={s.country}>
            <div className={s.inner}>
                <div className={s.title_box}>
                    <div>
                        <p className={s.title}>WELCOME TO STÜSSY</p>
                    </div>
                    <div onClick={onClickHandle} className={s.close_btn}><img width="15px" height="15px" src={close} alt="X" /></div>
                </div>
                <div className={s.subtitle}>
                    <p>YOU ARE SHIPPING TO:</p>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ }) => (
                        <Form className={s.form}>
                            <div className={s.select_container}>
                                <Field as="select" className={s.select} name="selectedOption">
                                    <option value="CANADA / CAD">CANADA / CAD</option>
                                </Field>
                            </div>
                            <button className={s.submit_btn} type="submit">
                                SAVE
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Country;