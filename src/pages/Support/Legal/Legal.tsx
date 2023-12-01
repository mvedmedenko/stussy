import { useState } from "react";
import s from "./Legal.module.css"
import arrow from "../../../assets/images/arrow.svg"

const Legal = () => {

    const [open, setOpen] = useState<string>("")
    

    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <h2 className={s.title}>LEGAL</h2>
                    <div className={s.dropdown} onClick={() => setOpen(open === "terms" ? "" : "terms")}>
                        <div className={s.subtitle_box}>
                            <h3 className={s.dropdown_subtitle}>TERMS OF USE</h3>
                            <span>
                                <img 
                                width="7px" 
                                height="8px" 
                                src={arrow} 
                                alt="arrow" 
                                className={open === "terms" ? s.arrow_active : s.arrow}
                                />
                            </span>
                        </div>
                        {open === "terms"
                            ? <p className={s.text}>Here should be a lot of information, but it doesn't matter in this educational project :)</p>
                            : null}
                    </div>
                    <div className={s.dropdown} onClick={() => setOpen(open === "privacy" ? "" : "privacy")}>
                        <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_subtitle}>PRIVACY POLICY</h3>
                        <span>
                                <img 
                                width="7px" 
                                height="8px" 
                                src={arrow} 
                                alt="arrow" 
                                className={open === "privacy" ? s.arrow_active : s.arrow}
                                />
                            </span>
                        </div>
                        {open === "privacy"
                            ? <p className={s.text}>Here should be a lot of information, but it doesn't matter in this educational project :)</p>
                            : null}
                    </div>
                    <div className={s.dropdown} onClick={() => setOpen(open === "personal" ? "" : "personal")}>
                        <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_subtitle}>PERSONAL INFO</h3>
                        <span>
                                <img 
                                width="7px" 
                                height="8px" 
                                src={arrow} 
                                alt="arrow" 
                                className={open === "personal" ? s.arrow_active : s.arrow}
                                />
                            </span>
                        </div>
                        {open === "personal"
                            ? <p className={s.text}>Here should be a lot of information, but it doesn't matter in this educational project :)</p>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Legal;