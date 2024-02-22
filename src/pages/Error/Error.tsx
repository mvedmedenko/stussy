import { NavLink } from "react-router-dom";
import s from "./Error.module.css"
import errorImg from "../../assets/images/error.png"

const Error = () => {
    return (
        <div className={s.error}>
            <div className="container_images">
                <div className={s.inner}>
                    <div className={s.title}>404 PAGE NOT FOUND</div>
                    <div className={s.text}>The page you requested does not exist. Click below to continue shopping.</div>
                    <div>
                        <div className={s.btn_box}>
                            <NavLink to="/stussy"><button>HOME</button></NavLink>
                            <NavLink to="/collections/new"><button>NEW ARRIVALS</button></NavLink>
                            <NavLink to="/collections/all"><button>ALL</button></NavLink>
                        </div>
                        <div className={s.img_box}>
                            <img src={errorImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error;