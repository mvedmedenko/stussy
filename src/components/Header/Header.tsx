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
import { getFirebaseCart, getLocalStorageCart, openBag } from "../../redux/actions/cartAction";
import Bag from "./Bag/Bag";
import Productnav from "./Productnav/Productnav";
import { closeSearch, openSearch } from "../../redux/actions/searchActions";

const Header = () => {

    const isAuth = useSelector((state) => state.authReducer.isAuth)
    const isBag = useSelector((state) => state.cartReducer.isBag)
    const isSearch = useSelector((state) => state.searchReducer.isSearch)
    const cartItems = useSelector((state) => state.cartReducer.items)
    const userId = useSelector((state) => state.authReducer.user.uid)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const pathSplit = pathname.split("/")
    const [activeLink, setActiveLink] = useState<string>("shop")
    const [mouseOnLink, setMouseOnLink] = useState<string | null>(null)
    const [subtotalCartItems, setSubtotalCartItems] = useState<number>(0)



    useEffect(() => {
        if (userId) {
            dispatch(getFirebaseCart(userId))
        } else {
            dispatch(getLocalStorageCart())
        }
    }, [userId])

    useEffect(() => {
        const countCartItems = () => {
            if (cartItems.length > 0) {
                const subtotal = cartItems.reduce((acc, item) => {
                    return acc + item.amount
                }, 0)
                setSubtotalCartItems(subtotal)
            } else {
                setSubtotalCartItems(0)
            }
        }
        countCartItems()
    }, [cartItems])


    const bagHandler = () => {
        if (!isBag) {
            dispatch(openBag())
        }
    }

    const searchHandler = (text: string) => {
        setActiveLink(text)
        dispatch(openSearch())
    }

    const logoHandler = () => {
        if(isSearch) {
            dispatch(closeSearch())
        }
    }

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div onClick={logoHandler} className={s.logo}>
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
                        <div onClick={() => searchHandler("search")} className={isSearch ? s.active : ""}>SEARCH</div>
                    </div>
                    <div className={s.bag}>
                        <div onClick={bagHandler} className={s.bag}>{subtotalCartItems > 0 ? `BAG (${subtotalCartItems})` : "BAG"}</div>
                    </div>
                </div>
            </div>
            <div className={s.bottom_list_wrapper}>
                <div className={s.container}>
                    <div className={s.bottom_list}>
                        {((mouseOnLink === null && pathSplit[1]  === "collections" && pathSplit[3] !== "products" && !isSearch) || mouseOnLink === "shop") && (
                            <Shopnav />
                        )}
                        {((mouseOnLink === null && pathSplit[1] === "blogs" && !isSearch) || mouseOnLink === "features") && (
                            <Featuresnav />
                        )}
                        {((mouseOnLink === null && pathSplit[1] === "pages" && !isSearch) || mouseOnLink === "support") && (
                            <Supportnav />
                        )}
                        {((mouseOnLink === null && activeLink === "search") || mouseOnLink === "search") && (
                            <Searchnav />
                        )}
                        {((pathSplit[1] === "account" && isAuth === true && !isSearch)) && (
                            <Accountnav />
                        )}
                        {((pathSplit[3] === "products" && !isSearch)) && (
                            <Productnav/> 
                        )}
                    </div>
                </div>
            </div>
            {isBag ? <Bag /> : null}
        </header>
    );
};

export default Header;

