import s from "./Newsletter.module.css"
import close from "../../../../assets/images/close.svg"

type NewsLetterProps = {
    setIsNewsLetter: (value: boolean) => void
}


const Newsletter = (props: NewsLetterProps) => {

    const onClickHandle = () => {
        props.setIsNewsLetter(false)
    }

    return (
        <div className={s.newsletter}>
            <div className={s.inner}>
                <div className={s.text_box}>
                    <p className={s.text}>SUBSCRIBE FOR NEW PRODUCT ARRIVALS AND EARLY RELEASE INFO</p>
                    <div onClick={onClickHandle} className={s.close_btn}><img width="20px" height="20px" src={close} alt="X" /></div>
                </div>
                <form>
                    <div className={s.input_box}>
                        <input className={s.input} type="email" placeholder="E-MAIL" />
                    </div>
                    <button className={s.button}>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;