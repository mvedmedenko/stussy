import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/logo.svg"
import s from "./Logo.module.css"

type LogoPropsType = {
    setActiveLink: (text: string) => void
}

const Logo = (props: LogoPropsType) => {

    const onClickHandler = (text: string) => {
        props.setActiveLink(text)
    }

    return (
        <div className={s.logo}>
            <NavLink onClick={() => onClickHandler("shop")} to="/"><img alt="LOGO" src={logo} width="56px" height="56px"/></NavLink>
        </div>
    );
};

export default Logo;