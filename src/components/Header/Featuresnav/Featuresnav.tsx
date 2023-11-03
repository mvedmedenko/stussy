import { NavLink } from "react-router-dom";
import s from "./Featuresnav.module.css"


const Featuresnav = () => {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/blogs/features">ALL</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/blogs/features/tagged/Collaborations">COLLABORATIONS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/blogs/features/tagged/Collections">COLLECTIONS</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/blogs/features/tagged/Features">FEATURES</NavLink></li>
                <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/blogs/features/tagged/Lookbooks">BOTTOMS</NavLink></li>
            </ul>
        </div>
    )
}

export default Featuresnav;