import s from "./Header.module.css"
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Shopnav from "./Shopnav/Shopnav";
import Featuresnav from "./Featuresnav/Featuresnav";
import Supportnav from "./Supportnav/Supportnav";
import { useState } from "react";
import Searchnav from "./Searchnav/Searchnav";
import { NavLink } from "react-router-dom";
import { openSearch } from "../../redux/actions/searchActions";
import { useDispatch } from "react-redux";

const Header = () => {

    const dispatch = useDispatch()
    const [activeLink, setActiveLink] = useState<string>("shop")
    const [mouseOnLink, setMouseOnLink] = useState<string | null>(null)

    const onClickHandler = (text: string) => {
        setActiveLink(text)
        dispatch(openSearch())
    }

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.logo}>
                    <Logo
                        setActiveLink={setActiveLink}
                    />
                </div>
                <div className={s.navbar_wrapper}>
                    <div className={s.container}>
                        <div className={s.navbar}>
                            <Navbar
                                activeLink={activeLink}
                                setActiveLink={setActiveLink}
                                setMouseOnLink={setMouseOnLink}
                                mouseOnLink={mouseOnLink}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.rightside}>
                    <div className={s.search}>
                        <div onClick={() => onClickHandler("search")} className={activeLink === "search" ? s.active : ""}>SEARCH</div>
                    </div>
                    <div className={s.bag}>
                        <NavLink onClick={() => onClickHandler("bag")} className={activeLink === "bag" ? s.active : ""} to="/bag">BAG</NavLink>
                    </div>
                </div>
            </div>
            <div className={s.bottom_list_wrapper}>
                <div className={s.container}>
                    <div className={s.bottom_list}>
                        {((mouseOnLink === null && activeLink === "shop") || mouseOnLink === "shop") && (
                            <Shopnav />
                        )}
                        {((mouseOnLink === null && activeLink === "features") || mouseOnLink === "features") && (
                            <Featuresnav />
                        )}
                        {((mouseOnLink === null && activeLink === "support") || mouseOnLink === "support") && (
                            <Supportnav />
                        )}
                        {((mouseOnLink === null && activeLink === "search") || mouseOnLink === "search") && (
                            <Searchnav />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

