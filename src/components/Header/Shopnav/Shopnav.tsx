import { NavLink } from "react-router-dom";
import s from "./Shopnav.module.css"

const Shopnav = () => {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/new">NEW</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/tees">TEES</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/sweats">SWEATS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/outwear">OUTERWEAR</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/bottoms">BOTTOMS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/denim">DENIM</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/knits">KNITS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/tops">TOPS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/shirts">SHIRTS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/headwear">HEADWEAR</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/accessories">ACCESSORIES</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/all">ALL</NavLink></li>
            </ul>
        </div>
    )
}

export default Shopnav;