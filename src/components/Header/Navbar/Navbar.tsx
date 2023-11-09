import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"
import React from "react";
import arrow from "../../../assets/images/arrow.svg"

type ShopnavPropsType = {
    setActiveLink: (text: string) => void
    setMouseOnLink: (text: string | null) => void
    activeLink: string
    mouseOnLink: string | null

}


const Navbar = (props: ShopnavPropsType) => {

    const onClickHandler = (text: string) => {
        props.setActiveLink(text)
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
                <div>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <NavLink
                                onClick={() => onClickHandler("shop")}
                                className={props.activeLink === "shop" ? s.active : ""}
                                to="/collections/all"
                                onMouseLeave={onMouseLeaveHandler}
                                onMouseOver={onMouseOverHandler}
                            >SHOP
                            </NavLink>
                            <div>
                                <img
                                    className={props.activeLink && props.mouseOnLink === "shop" ? s.arrow_active : s.arrow}
                                    width="7px"
                                    height="7px"
                                    src={arrow}
                                    alt="arrow"
                                />
                            </div>
                        </li>
                        <li className={s.item}>
                            <NavLink
                                onClick={() => onClickHandler("features")}
                                className={props.activeLink === "features" ? s.active : ""}
                                to="/blogs/all"
                                onMouseLeave={onMouseLeaveHandler}
                                onMouseOver={onMouseOverHandler}
                            >FEATURES
                            </NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink
                                onClick={() => onClickHandler("support")}
                                className={props.activeLink === "support" ? s.active : ""}
                                to="/pages/customer-support"
                                onMouseLeave={onMouseLeaveHandler}
                                onMouseOver={onMouseOverHandler}
                            >SUPPORT
                            </NavLink>
                            <div>
                                <img
                                    className={props.activeLink && props.mouseOnLink === "support" ? s.arrow_active : s.arrow}
                                    width="7px"
                                    height="7px"
                                    src={arrow}
                                    alt="arrow"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
