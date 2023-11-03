import { NavLink } from "react-router-dom";
import s from "./Search.module.css"

const Search = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? s.active : ""} to="/search">Search</NavLink>
        </div>
    )
}

export default Search;