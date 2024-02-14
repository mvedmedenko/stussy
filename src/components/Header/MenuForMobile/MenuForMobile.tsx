import s from "./MenuForMobile.module.css"
import { useAppDispatch } from "../../../hooks/hooks"
import { useState } from "react"
import arrow from "../../../assets/images/arrow.svg"
import { NavLink } from "react-router-dom"
import { setNavigationActiveList } from "../../../redux/actions/headerActions"
import Country from "../../Footer/Bottomfooter/Country/Country"

type PropsTypes = {
    isMenu: boolean
    setIsMenu: (condition: boolean) => void
}


const MenuForMibile = (props: PropsTypes) => {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState<string>("shop")
    const [isCurrency, setIsCurrency] = useState<boolean>(false)



    const linkHandler = (text: string) => {
        dispatch(setNavigationActiveList(text))
        props.setIsMenu(false)
    }

    const currencyHandler = () => {
        setIsCurrency(!isCurrency)
    }

    return (
        <div className={s.menu_for_mobile}>
            <div className="container">
                <div className={s.dropdown} onClick={() => setOpen(open === "shop" ? "" : "shop")}>
                    <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_title}>SHOP</h3>
                        <span>
                            <img
                                width="7px"
                                height="8px"
                                src={arrow}
                                alt="arrow"
                                className={open === "shop" ? s.arrow_active : s.arrow}
                            />
                        </span>
                    </div>
                    {open === "shop"
                        ?
                        <div>
                            <ul className={s.list}>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/new">NEW</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/tees">TEES</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/sweats">SWEATS</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/outwear">OUTERWEAR</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/bottoms">BOTTOMS</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/denim">DENIM</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/knits">KNITS</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/tops">TOPS</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/shirts">SHIRTS</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/headwear">HEADWEAR</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/accessories">ACCESSORIES</NavLink></li>
                                <li onClick={() => linkHandler("shop")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/collections/all">ALL</NavLink></li>
                            </ul>
                        </div>
                        :
                        <></>
                    }

                </div>
                <div className={s.dropdown} onClick={() => setOpen(open === "support" ? "" : "support")}>
                    <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_title}>SUPPORT</h3>
                        <span>
                            <img
                                width="7px"
                                height="8px"
                                src={arrow}
                                alt="arrow"
                                className={open === "support" ? s.arrow_active : s.arrow}
                            />
                        </span>
                    </div>
                    {open === "support"
                        ?
                        <div>
                            <ul className={s.list}>
                                <li onClick={() => linkHandler("support")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/customer-support">CUSTOMER SUPPORT</NavLink></li>
                                <li onClick={() => linkHandler("support")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/shipping-returns">SHIPPING & RETURNS</NavLink></li>
                                <li onClick={() => linkHandler("support")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/size-guide">SIZE GUIDE</NavLink></li>
                                <li onClick={() => linkHandler("support")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/careers">CAREERS</NavLink></li>
                                <li onClick={() => linkHandler("support")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/legal">LEGAL</NavLink></li>
                                <li onClick={() => linkHandler("support")} className={s.item}><NavLink className={({ isActive }) => isActive ? s.active : ""} to="/pages/accessibilitys">ACCESSIBILITY</NavLink></li>
                            </ul>
                        </div>
                        :
                        <></>
                    }

                </div>
                <div onClick={() => linkHandler("account")} className={s.dropdown}>
                    <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_title}><NavLink to="/account">ACCOUNT</NavLink></h3>
                    </div>
                </div>
                <div onClick={() => linkHandler("chapters")} className={s.dropdown}>
                    <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_title}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></h3>
                    </div>
                </div>
                <div onClick={() => linkHandler("chapters")} className={s.dropdown}>
                    <div className={s.subtitle_box}>
                        <h3 className={s.dropdown_title}><NavLink to="/blogs/all">FEATURES</NavLink></h3>
                    </div>
                </div>
                <div className={s.dropdown}>
                    <div onClick={currencyHandler} className={s.currency_box}>
                        <div>Shipping to: Canada / CAD $</div>
                        <div>CHANGE</div>
                    </div>
                </div>
            </div>
            {isCurrency && <Country setIsCountry={setIsCurrency}/>}
        </div>
    )
}

export default MenuForMibile;
