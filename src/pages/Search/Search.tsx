import { closeSearch } from "../../redux/actions/searchActions";
import s from "./Search.module.css"
import { useAppDispatch } from "../../hooks/hooks";


const Search = () => {

    const dispatch = useAppDispatch()

    const onBagListener = () => {
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