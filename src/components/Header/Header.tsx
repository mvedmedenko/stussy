import s from "./Header.module.css"
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Shopnav from "./Shopnav/Shopnav";
import Featuresnav from "./Featuresnav/Featuresnav";
import Supportnav from "./Supportnav/Supportnav";
import { useEffect, useState } from "react";
import Searchnav from "./Searchnav/Searchnav";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Accountnav from "./Accountnav/Accountnav";
import { getFirebaseCart, getLocalStorageCart, openBag } from "../../redux/actions/cartActions";
import Bag from "./Bag/Bag";
import Productnav from "./Productnav/Productnav";
import { closeSearch, openSearch } from "../../redux/actions/searchActions";
import { closeFilter } from "../../redux/actions/filterActions";
import Chaptersnav from "./Chaptersnav/Chaptersnav";
import { setNavigationActiveList } from "../../redux/actions/headerActions";

const Header = () => {

    const isAuth = useAppSelector((state) => state.authReducer.isAuth)
    const isBag = useAppSelector((state) => state.cartReducer.isBag)
    const isSearch = useAppSelector((state) => state.searchReducer.isSearch)
    const isFilter = useAppSelector((state) => state.filterReducer.isFilter)
    const cartItems = useAppSelector((state) => state.cartReducer.items)
    const userId = useAppSelector((state) => state.authReducer.user.uid)
    const navigationActiveList = useAppSelector((state) => state.headerReducer.navigationActiveList)


    const dispatch = useAppDispatch()
    const [mouseOnLink, setMouseOnLink] = useState<string | null>(null)
    const [subtotalCartItems, setSubtotalCartItems] = useState<number>(0)


    useEffect(() => {
        const currentList = sessionStorage.getItem("currentList")
        if (currentList) {
            if (currentList !== navigationActiveList) {
                dispatch(setNavigationActiveList(currentList))
            }
        }
    }, [])

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
        dispatch(openSearch())

        if (isFilter) {
            dispatch(closeFilter())
        }
    }

    const logoHandler = () => {
        if (isSearch) {
            dispatch(closeSearch())
        }
    }

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div onClick={logoHandler} className={s.logo}>
                    <Logo />
                </div>
                <div className={s.navbar_wrapper}>
                    <div className={s.container}>
                        <div className={s.navbar}>
                            <Navbar
                                setMouseOnLink={setMouseOnLink}
                                mouseOnLink={mouseOnLink}
                                navigationActiveList={navigationActiveList}
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
                        {((mouseOnLink === null && navigationActiveList === "shop" && !isSearch) || mouseOnLink === "shop" 
                        || (mouseOnLink === null && navigationActiveList === "main" && !isSearch)) && (
                            <Shopnav />
                        )}

                        {((mouseOnLink === null && navigationActiveList === "features" && !isSearch) || mouseOnLink === "features") && (
                            <Featuresnav />
                        )}
                        {((mouseOnLink === null && navigationActiveList === "support" && !isSearch) || mouseOnLink === "support") && (
                            <Supportnav />
                        )}
                        {((mouseOnLink === null && isSearch === true) || mouseOnLink === "search") && (
                            <Searchnav />
                        )}
                        {((navigationActiveList === "chapters" && !isSearch)) && (
                            <Chaptersnav />
                        )}
                        {((navigationActiveList === "account" && isAuth === true && !isSearch)) && (
                            <Accountnav />
                        )}
                        {((navigationActiveList === "product" && !isSearch)) && (
                            <Productnav />
                        )}
                    </div>
                </div>
            </div>
            {isBag ? <Bag /> : null}
        </header>
    );
};

export default Header;

