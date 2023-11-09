import { NavLink } from "react-router-dom";
import s from "./Search.module.css"

type SearchPropsType = {
    setActiveLink: (text: string) => void
    activeLink: string
}

const Search = (props: SearchPropsType) => {

    const onClickHandler = (text: string) => {
        props.setActiveLink(text)
    }

    return (
        <div className={s.search}>
            <NavLink onClick={() => onClickHandler("search")} className={props.activeLink === "search" ? s.active : ""} to="/search">SEARCH</NavLink>
        </div>
    )
}

export default Search;