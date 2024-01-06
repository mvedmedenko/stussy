import { NavLink } from "react-router-dom";
import s from "./Shopnav.module.css"
import { useDispatch, useSelector } from "react-redux";
import { openFilter, closeFilter } from "../../../redux/actions/filterAction";

const Shopnav = () => {

    const dispatch = useDispatch()
    const isFilter = useSelector((state) => state.filterReducer.isFilter)

    const filterHandle = () => {
        if(isFilter) {
            dispatch(closeFilter())
        } else {
            dispatch(openFilter())
        }
    }

    const linkHandler = () => {
        if(isFilter) {
            dispatch(closeFilter())
        }
    }

    return (
        <div className={s.shopnav}>
            <div>
                <ul className={s.list}>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/new">NEW</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/tees">TEES</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/sweats">SWEATS</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/outwear">OUTERWEAR</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/bottoms">BOTTOMS</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/denim">DENIM</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/knits">KNITS</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/tops">TOPS</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/shirts">SHIRTS</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/headwear">HEADWEAR</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/accessories">ACCESSORIES</NavLink></li>
                    <li onClick={linkHandler} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/all">ALL</NavLink></li>
                </ul>
            </div>
            <div className={s.filter}>
                <ul className={s.list}>
                    <li onClick={filterHandle} className={`${s.item} ${isFilter ? s.active : ""}`}>FILTER</li>
                </ul>
            </div>
        </div>
    )
}

export default Shopnav;