import s from "./Header.module.css"
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Shopnav from "./AdditionalNavigation/Shopnav/Shopnav";
import Featuresnav from "./AdditionalNavigation/Featuresnav/Featuresnav";
import Supportnav from "./AdditionalNavigation/Supportnav/Supportnav";
import { useEffect, useState } from "react";
import Searchnav from "./AdditionalNavigation/Searchnav/Searchnav";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Accountnav from "./AdditionalNavigation/Accountnav/Accountnav";
import { getFirebaseCart, getLocalStorageCart, openBag } from "../../redux/actions/cartActions";
import Bag from "./Bag/Bag";
import Productnav from "./AdditionalNavigation/Productnav/Productnav";
import { closeSearch, openSearch } from "../../redux/actions/searchActions";
import { closeFilter } from "../../redux/actions/filterActions";
import Chaptersnav from "./AdditionalNavigation/Chaptersnav/Chaptersnav";
import { setNavigationActiveList } from "../../redux/actions/headerActions";
import searchIcon from "../../assets/images/search.svg"
import cartIcon from "../../assets/images/cart.svg"
import closeIcon from "../../assets/images/close.svg"
import MenuForMibile from "./MenuForMobile/MenuForMobile";

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
    const [isMenu, setIsMenu] = useState<boolean>(false)


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
                const subtotal = cartItems.reduce((acc: number, item: any) => {
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
        if (isMenu) {
            setIsMenu(false)
        }
        if (!isBag) {
            dispatch(openBag())
        }
    }

    const menuHandler = () => {
        setIsMenu(!isMenu)
    }

    const searchHandler = () => {
        if (isMenu) {
            setIsMenu(false)
        }

        dispatch(openSearch())

        if (isFilter) {
            dispatch(closeFilter())
        }
    }

    const logoHandler = () => {
        if (isSearch) {
            dispatch(closeSearch())
        }

        if(isMenu) {
            setIsMenu(false)
        }
    }

    return (
        <header className={isMenu ? s.mobile_active : s.header}>
            <div className={s.inner}>
                <div onClick={logoHandler} className={s.logo}>
                    <Logo />
                </div>
                <div className={isMenu ? s.navbar_mobile : s.navbar_wrapper}>
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
                        <div onClick={searchHandler} className={isSearch ? s.active : ""}>
                            <span className={s.search_text}>SEARCH</span>
                            <span className={s.search_icon}><img width="20px" height="20px" src={searchIcon} alt="SEARCH" /></span>
                        </div>
                    </div>
                    <div className={s.bag}>
                        <div onClick={bagHandler}>
                            <span className={s.bag_text}>{subtotalCartItems > 0 ? `BAG (${subtotalCartItems})` : "BAG"}</span>
                            <span className={s.bag_icon}>
                                <img width="20px" height="20px" src={cartIcon} alt="CART" />
                                {subtotalCartItems > 0 ? <div className={s.bag_amount}>{subtotalCartItems}</div> : ""}
                            </span>
                        </div>
                    </div>
                    <div className={s.burger}>
                        {isMenu
                            ?
                            <div onClick={menuHandler} className={s.close}><img width="20px" height="20px" src={closeIcon} alt="X" /></div>
                            :
                            <div onClick={menuHandler}>
                                <div className={s.burger_line}></div>
                                <div className={s.burger_line}></div>
                                <div className={s.burger_line}></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className={s.bottom_list_wrapper}>
                <div className={s.container}>
                    {!isMenu
                        &&
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
                    }
                </div>
            </div>
            {isMenu && <MenuForMibile isMenu={isMenu} setIsMenu={setIsMenu}/>}
            {isBag ? <Bag /> : null}
        </header>
    );
};

export default Header;

