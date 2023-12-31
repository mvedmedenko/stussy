import { NavLink } from "react-router-dom"
import s from "./Account.module.css"
import { useDispatch, useSelector } from "react-redux"
import { closeChat, openChat } from "../../redux/actions/chatActions"

const Account = () => {

    const dispatch = useDispatch()
    const isChat = useSelector((state) => state.chatReducer.isChat)
    const user = useSelector((state) => state.authReducer.user)

    const openChatHandle = () => {
        if(isChat) {
            dispatch(closeChat())
        } else {
            dispatch(openChat())
        }
    }


    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.account_details}>
                        <div>
                            <h2 className={s.title}>ACCOUNT DETAILS</h2>
                        </div>
                        <div className={s.user_name}>
                            {user.displayName}
                        </div>
                        <div className={s.user_email}>
                            {user.email}
                        </div>
                        <div className={s.manage_addresses}>
                            <NavLink to={"/account/addresses"}>MANAGE ADDRESSES</NavLink>
                        </div>
                        <div className={s.customer_support}>
                            <div>
                                <h2 className={s.title}>CUSTOMER SUPPORT</h2>
                            </div>
                            <div className={s.email_subtitle}>
                                EMAIL:
                            </div>
                            <div className={s.support_email}>
                                <a href="mailto:support@stussy.com">support@stussy.com</a>
                            </div>
                            <div className={s.hours_subtitle}>
                                HOURS:
                            </div>
                            <div className={s.work_hours}>
                                Monday-Friday 8:00am - 4:00pm (PST) <br />
                                *Excluding Major Holidays
                            </div>
                            <div className={s.contact}>
                                <NavLink to={"/pages/customer-support"}>CONTACT</NavLink>
                            </div>
                            <div className={s.faq}>
                                <NavLink to={"/pages/customer-support"}>FAQ</NavLink>
                            </div>
                            <div onClick={openChatHandle} className={s.chat}>
                                {isChat ? "CLOSE" : "CHAT"}
                            </div>
                            <div className={s.shipping_returns}>
                                <NavLink to={"/pages/shipping-returns"}>SHIPPING & RETURNS</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={s.order_history}>
                        <div>
                            <h2 className={s.title}>ORDER HISTORY</h2>
                        </div>
                        <div className={s.order_text}>
                            <p>You haven't placed any orders yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;