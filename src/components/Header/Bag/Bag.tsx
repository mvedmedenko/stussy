import { NavLink } from "react-router-dom";
import s from "./Bag.module.css"

type SearchPropsType = {
    setActiveLink: (text: string) => void
    activeLink: string
}

const Bag = (props: SearchPropsType) => {

    const onClickHandler = (text: string) => {
        props.setActiveLink(text)
    }

    return (
        <div className={s.bag}>
            <NavLink onClick={() => onClickHandler("bag")} className={props.activeLink === "bag" ? s.active : ""} to="/bag">BAG</NavLink>
        </div>
    )
}

export default Bag;