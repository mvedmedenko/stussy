import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/logo.svg"
import s from "./Logo.module.css"
import { setNavigationActiveList } from "../../../redux/actions/headerActions";
import { useAppDispatch } from "../../../hooks/hooks";

const Logo = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (text: string) => {
        dispatch(setNavigationActiveList(text))
    }

    return (
        <div onClick={() => onClickHandler("main")} className={s.logo}>
            <NavLink to="/"><img alt="LOGO" src={logo} width="56px" height="56px"/></NavLink>
        </div>
    );
};

export default Logo;