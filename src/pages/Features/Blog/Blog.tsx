import { useParams } from "react-router";
import s from "./Blog.module.css"
import { featuresData } from "../featuresData";
import { MouseEventHandler } from "react";
import Error from "../../Error/Error";
import { NavLink } from "react-router-dom";



const Blog = () => {

    const { id } = useParams();
    const item = featuresData.find((item) => item.id === id);
    const recommendation = featuresData.filter((item) => item.id !== id).slice(0, 4);

    const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    };

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
                        <div className={s.email_container}>
                            <div>
                                <p className={s.email_text}>SUBSCRIBE FOR NEW PRODUCT ARRIVALS & EARLY RELEASE INFO</p>
                            </div>
                            <form>
                                <div className={s.input_box}>
                                    <input className={s.input} type="email" placeholder="E-MAIL" />
                                </div>
                                <button onClick={onClickHandler} className={s.button}>SUBSCRIBE</button>
                            </form>
                        </div>
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
