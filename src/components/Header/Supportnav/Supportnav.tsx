import { NavLink } from "react-router-dom";
import s from "./Supportnav.module.css"


const Supportnav = () => {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/customer-support">CUSTOMER SUPPORT</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/shipping-returns">SHIPPING & RETURNS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/size-guide">SUIZE GUIDE</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/careers">CAREERS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/legal">LEGAL</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/accessibilitys">ACCESSIBILITYS</NavLink></li>
            </ul>
        </div>
    )
}

export default Supportnav;