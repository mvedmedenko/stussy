import { useState } from "react";
import s from "./Legal.module.css"

const Legal = () => {

    const [open, setOpen] = useState<string>("")

    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <h2 className={s.title}>LEGAL</h2>
                    <div className={s.dropdown} onClick={() => setOpen(open === "terms" ? "" : "terms")}>
                        <h3 className={s.dropdown_title}>TERMS OF USE</h3>
                        {open === "terms" 
                        ? <p>terms</p> 
                        : null}
                    </div>
                    <div className={s.dropdown} onClick={() => setOpen(open === "privacy" ? "" : "privacy")}>
                        <h3 className={s.dropdown_title}>PRIVACY POLICY</h3>
                        {open === "privacy" 
                        ? <p>privacy</p> 
                        : null}
                    </div>
                    <div className={s.dropdown} onClick={() => setOpen(open === "personal" ? "" : "personal")}>
                        <h3 className={s.dropdown_title}>PERSONAL INFO</h3>
                        {open === "personal" 
                        ? <p>personal</p> 
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Legal;