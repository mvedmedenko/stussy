import { useParams } from "react-router";
import s from "./Blog.module.css"
import { featuresData } from "../featuresData";
import Error from "../../Error/Error";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

interface FormData {
    email: string;
}

const initialValues: FormData = {
    email: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});



const Blog = () => {

    const { id } = useParams();
    const item = featuresData.find((item) => item.id === id);
    const recommendation = featuresData.filter((item) => item.id !== id).slice(0, 4);
    const [isSubmited, setIsSubmited] = useState<boolean>(false)

    // const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    //     e.preventDefault();
    // };

    const handleSubmit = (value: FormData) => {
        console.log(value)
        setIsSubmited(true)
    };


    <div>
        THANK YOU FOR SUBSCRIBING TO STÜSSY.
    </div>


    return (
        <div>
            {typeof item === "object"
                ?
                <div className={s.inner}>
                    <div className="container">
                        <div className={s.text_wrapper}>
                            <div>
                                <h2 className={s.title}>{item?.title}</h2>
                            </div>
                            <div>
                                <p className={s.data}>{item?.data}</p>
                            </div>
                            <div className={s.text_container}>
                                <div>
                                    <p className={s.text}>{item?.text}</p>
                                </div>
                                <div>
                                    <p className={s.text}>{item?.available}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_images">
                        <div className={s.grid_container}>
                            {item?.images.map((i) => {
                                return <div className={s.img_container} key={i.id}>
                                    <img src={i.link} alt="img" />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className={s.authors_wrapper}>
                        <div className={s.authors_container}>
                            {item?.authors.map((i) => {
                                return <div key={i.id}>
                                    <p>{i.author}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className={s.email_wrapper}>
                        {
                            isSubmited
                                ?
                                <div className={s.submited_message}>
                                    THANK YOU FOR SUBSCRIBING TO STÜSSY.
                                </div>
                                :

                                <div className={s.email_wrapper}>
                                    <div className={s.email_container}>
                                        <div>
                                            <p className={s.email_text}>SUBSCRIBE FOR NEW PRODUCT ARRIVALS & EARLY RELEASE INFO</p>
                                        </div>
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ errors, touched }) => (
                                                <Form className={s.form}>
                                                    <div className={s.input_box}>
                                                        <Field
                                                            placeholder="E-MAIL"
                                                            className={`${s.input} ${errors.email && touched.email ? s.errorBorder : ''}`}
                                                            type="email"
                                                            name="email"
                                                        />
                                                        <button className={s.button} type="submit">
                                                            SUBSCRIBE
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>

                        }
                    </div>
                    <div className={s.recommendation}>
                        <div className={s.recommendation_text}>
                            <p>YOU MIGHT ALSO LIKE</p>
                        </div>
                        <div className="container_images">
                            <div className={s.recommendation_container}>
                                {recommendation.map((i) => {
                                    return (
                                        <NavLink className={s.link} to={`/blogs/features/${i.id}`} key={i.id}>
                                            <div>
                                                <div className={s.recommendation_img}>
                                                    <img src={i.mainImage.link} alt="img" />
                                                </div>
                                                <div className={s.recommendation_title}>
                                                    <h4>{i.title}</h4>
                                                </div>
                                                <div className={s.description}>
                                                    <p>{i.description}</p>
                                                </div>
                                            </div>
                                            <div className={s.mark_container}>
                                                <div>
                                                    <p>{i.tag}</p>
                                                </div>
                                                <div className={s.recommendation_data}>
                                                    <p>{i.data}</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                : <Error />}
        </div>
    )
}

export default Blog;
