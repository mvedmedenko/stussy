import s from "./Checkout.module.css"
import logo from "../../assets/images/logo.svg"
import { useNavigate } from "react-router-dom"


const Checkout = () => {

    const navigate = useNavigate();

    const prevPageHandler = () => {
        navigate(-1)
    }


    return (
        <div className={s.checkout}>
            <div className={s.inner}>
                <div>
                    <img width="200px" height="200px" src={logo} alt="STUSSY" />
                </div>
                <div>
                    <div className={s.text}>
                        Hello there, this is an educational project, and you cannot make purchases here.  <br/>
                        If you liked something from these items, you can visit the official website of the brand
                    </div>
                    <div className={s.stussy}>
                        <a target="_blank" href="https://www.stussy.com/">stussy.com</a>
                    </div>
                    <div onClick={prevPageHandler} className={s.back_btn}>
                        <button>BACK TO THIS EDUCATIONAL PROJECT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout;