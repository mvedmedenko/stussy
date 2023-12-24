import s from "./Header.module.css"
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Shopnav from "./Shopnav/Shopnav";
import Featuresnav from "./Featuresnav/Featuresnav";
import Supportnav from "./Supportnav/Supportnav";
import { useEffect, useState } from "react";
import Searchnav from "./Searchnav/Searchnav";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Accountnav from "./Accountnav/Accountnav";
import { getFirebaseCart, openBag } from "../../redux/actions/cartAction";
import Bag from "./Bag/Bag";

const Header = () => {

    const isAuth = useSelector((state) => state.authReducer.isAuth)
    const isBag = useSelector((state) => state.cartReducer.isBag)
    const cartItems = useSelector((state) => state.cartReducer.items)
    const userId = useSelector((state) => state.authReducer.user.uid)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const pathSplit = pathname.split("/")
    const [activeLink, setActiveLink] = useState<string>("shop")
    const [mouseOnLink, setMouseOnLink] = useState<string | null>(null)

    useEffect(() => {
        if(userId) {
            dispatch(getFirebaseCart(userId))
        }
    }, [userId])

    const bagHandler = () => {
        if (!isBag) {
            dispatch(openBag())
        }
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
                        <div onClick={bagHandler} className={s.bag}>BAG ({cartItems.length})</div>
                    </div>
                </div>
            </div>
            <div className={s.bottom_list_wrapper}>
                <div className={s.container}>
                    <div className={s.bottom_list}>
                        {((mouseOnLink === null && pathSplit[1] === "collections") || mouseOnLink === "shop") && (
                            <Shopnav />
                        )}
                        {((mouseOnLink === null && pathSplit[1] === "blogs") || mouseOnLink === "features") && (
                            <Featuresnav />
                        )}
                        {((mouseOnLink === null && pathSplit[1] === "pages") || mouseOnLink === "support") && (
                            <Supportnav />
                        )}
                        {((mouseOnLink === null && activeLink === "search") || mouseOnLink === "search") && (
                            <Searchnav />
                        )}
                        {((pathSplit[1] === "account" && isAuth === true)) && (
                            <Accountnav />
                        )}
                    </div>
                </div>
            </div>
            {isBag ? <Bag /> : null}
        </header>
    );
};

export default Header;

