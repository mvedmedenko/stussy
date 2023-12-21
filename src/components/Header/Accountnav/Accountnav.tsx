import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import { NavLink } from "react-router-dom";
import s from "./Accountnav.module.css"

const Accountnav = () => {

    const dispatch = useDispatch()

    const signOutHandle = () => {
        dispatch(logoutUser())
    }

    return (
        <div>
            <div className={s.inner}>
                <div>
                    <ul className={s.list}>
                        <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/account">ACCOUNT DETAILS</NavLink></li>
                        <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/account/addresses">ADDRESSES</NavLink></li>
                        <li className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/shipping-returns">SHIPPING & RETURNS</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button className={s.button} onClick={signOutHandle}>SIGN OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Accountnav;