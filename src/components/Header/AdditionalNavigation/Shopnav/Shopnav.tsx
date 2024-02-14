import { NavLink } from "react-router-dom";
import s from "./Shopnav.module.css"
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { openFilter, closeFilter } from "../../../../redux/actions/filterActions";
import arrow from "../../../../assets/images/arrow.svg"

const Shopnav = () => {

    const dispatch = useAppDispatch()
    const isFilter = useAppSelector((state) => state.filterReducer.isFilter)
    const navigationActiveList = useAppSelector((state) => state.headerReducer.navigationActiveList)

    const filterHandle = () => {
        if (isFilter) {
            dispatch(closeFilter())

        } else {
            dispatch(openFilter())
        }
    }

    const linkHandler = () => {
        if (isFilter) {
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
            {navigationActiveList === "shop"
                ?
                <div className={s.filter_box}>
                    <div onClick={filterHandle} className={s.filter}>FILTER</div>
                    <div className={`${s.arrow} ${isFilter ? s.arrow_active : ""}`}>
                        <img width="7px" height="7px" src={arrow} alt="" />
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default Shopnav;