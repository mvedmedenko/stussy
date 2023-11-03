import { NavLink } from "react-router-dom";
import s from "./Bag.module.css"

const Bag = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? s.active : ""} to="/bag">Bag</NavLink>
        </div>
    )
}

export default Bag;