import s from "./Bottomfooter.module.css"
import { NavLink } from "react-router-dom";




const Bottomfooter = () => {
    return (
        <div className={s.bottomfooter}>
            <div>
                <ul className={s.list}>
                    <li className={s.item}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></li>
                    <li className={s.item}><div>COUNTRY</div></li>
                    <li className={s.item}><div>CHAT</div></li>
                </ul>
            </div>
            <div className={s.text}>
                © 2023 STÜSSY
            </div>
        </div>
    )
}


export default Bottomfooter;
