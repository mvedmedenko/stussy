import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { logoutUser } from "../../../redux/actions/authActions";
import { NavLink } from "react-router-dom";
import s from "./Accountnav.module.css"
import { setAccountNavigationActiveList } from "../../../redux/actions/headerActions";
import { setNavigationActiveList } from "../../../redux/actions/headerActions";

const Accountnav = () => {

    const dispatch = useAppDispatch()
    const userEmail = useAppSelector((state) => state.authReducer.user.email)
    const accountNavigationActiveList = useAppSelector((state) => state.headerReducer.accountNavigationActiveList)

    const signOutHandle = () => {
        dispatch(logoutUser())
    }

    const accountNavigationActiveListHandler = (text: string) => {
        dispatch(setAccountNavigationActiveList(text))
    }

    const shippingAndReturnsHandler = (text: string) => {
        dispatch(setNavigationActiveList(text))
    }

    return (
        <div>
            <div className={s.inner}>
                <div>
                    <ul className={s.list}>
                        <li
                            onClick={() => accountNavigationActiveListHandler("account")}
                            className={s.item}>
                            <NavLink
                                className={accountNavigationActiveList === "account" ? s.active : ""}
                                to="/account"
                            >
                                ACCOUNT DETAILS
                            </NavLink>
                        </li>
                        <li
                            onClick={() => accountNavigationActiveListHandler("address")}
                            className={s.item}>
                            <NavLink
                                className={accountNavigationActiveList === "address" ? s.active : ""}
                                to="/account/addresses"
                            >
                                ADDRESSES
                            </NavLink>
                        </li>
                        <li
                            className={s.item}>
                            <NavLink
                                onClick={() => shippingAndReturnsHandler("support")}
                                to="/pages/shipping-returns"
                            >
                                SHIPPING & RETURNS
                            </NavLink>
                            </li>
                    </ul>
                </div>
                <div className={s.right_side_box}>
                    <div className={s.email}>
                        {userEmail}
                    </div>
                    <div className={s.signout}>
                        <button className={s.button} onClick={signOutHandle}>SIGN OUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accountnav;


