import { closeSearch } from "../../redux/actions/searchActions";
import s from "./Search.module.css"
import { useDispatch } from "react-redux";


const Search = () => {

    const dispatch = useDispatch()

    const onBagListener = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(closeSearch());
    };

    return (
        <div onClick={onBagListener} className={s.search}>
            <div className={s.text}>
                SEARCH IS NOT WORKING
            </div>
        </div>
    )
}

export default Search;