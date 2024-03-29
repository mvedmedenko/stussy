import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"
import React from "react";
import arrow from "../../../assets/images/arrow.svg"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { closeSearch } from "../../../redux/actions/searchActions";
import { setNavigationActiveList } from "../../../redux/actions/headerActions";

type ShopnavPropsType = {
    setMouseOnLink: (text: string | null) => void
    mouseOnLink: string | null
    navigationActiveList: string

}


const Navbar = (props: ShopnavPropsType) => {

    const dispatch = useAppDispatch()
    const isSearch = useAppSelector((state) => state.searchReducer.isSearch)

    const onClickHandler = (text: string) => {
        if(!isSearch) {
            dispatch(setNavigationActiveList(text))
        } else {
            dispatch(closeSearch())
            dispatch(setNavigationActiveList(text))
        }
    }

    const onMouseOverHandler = (event: React.MouseEvent) => {
        const text = event.currentTarget.innerHTML.toLowerCase()
        props.setMouseOnLink(text)
    }

    const onMouseLeaveHandler = () => {
        props.setMouseOnLink(null)
    }

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.inner}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <div className={s.item_box}>
                                <div>
                                    <NavLink
                                        onClick={() => onClickHandler("shop")}
                                        className={props.navigationActiveList === "shop" ? s.active : ""}
                                        to="/collections/all"
                                        onMouseLeave={onMouseLeaveHandler}
                                        onMouseOver={onMouseOverHandler}
                                    >SHOP
                                    </NavLink>
                                </div>
                                <span>
                                    <img
                                        className={props.navigationActiveList === "shop" ? s.arrow_active : s.arrow}
                                        width="7px"
                                        height="8px"
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </span>
                            </div>
                        </li>
                        <li className={s.item}>
                            <NavLink
                                onClick={() => onClickHandler("features")}
                                className={props.navigationActiveList === "features" ? s.active_features : ""}
                                to="/blogs/all"
                                onMouseLeave={onMouseLeaveHandler}
                                onMouseOver={onMouseOverHandler}
                            >FEATURES
                            </NavLink>
                        </li>
                        <li className={s.item}>
                            <div className={s.item_box}>
                                <div>
                                    <NavLink
                                        onClick={() => onClickHandler("support")}
                                        className={props.navigationActiveList === "support" ? s.active : ""}
                                        to="/pages/customer-support"
                                        onMouseLeave={onMouseLeaveHandler}
                                        onMouseOver={onMouseOverHandler}
                                    >SUPPORT
                                    </NavLink>
                                </div>
                                <span>
                                    <img
                                        className={props.navigationActiveList === "support" ? s.arrow_active : s.arrow}
                                        width="7px"
                                        height="7px"
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
