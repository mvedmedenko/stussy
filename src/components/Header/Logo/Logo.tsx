import {NavLink} from "react-router-dom";
import logo from "../../../assets/logo.svg"
import s from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink to="/"><img alt="LOGO" src={logo} width="50px" height="50px"/></NavLink>
        </div>
    );
};

export default Logo;