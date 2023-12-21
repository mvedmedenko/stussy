import s from "./Error.module.css"
import error from "../../assets/images/error.svg"

const Error = () => {
    return (
        <div className={s.error}>
            <div className="container">
                <div className={s.wrapper}>
                <div className={s.inner}>
                    <div className={s.text}>
                        <h1 >Page Not Found</h1>
                    </div>
                    <div className={s.img_container}>
                        <img src={error} alt="404" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Error;