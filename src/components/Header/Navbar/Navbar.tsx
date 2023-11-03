import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

type ShopnavPropsType = {
    setActiveLink: (text: string) => void
}


const Navbar = (props: ShopnavPropsType) => {

    const onClickHandler = (text: string) => {
        props.setActiveLink(text)
    }

    return (
        <div>
            <nav className={s.nav}>
                <div>
                    <ul className={s.list}>
                        <li className={s.item}><NavLink onClick={() => onClickHandler("shop") } className={({ isActive }) => isActive ? s.active : ""} to="/collections/all">Shop</NavLink></li>
                        <li className={s.item}><NavLink onClick={() => onClickHandler("features")} className={({ isActive }) => isActive ? s.active : ""} to="/blogs/features">Features</NavLink></li>
                        <li className={s.item}><NavLink onClick={() => onClickHandler("support")} className={({ isActive }) => isActive ? s.active : ""} to="/pages/customer-support">Support</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
