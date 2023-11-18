import { useDispatch } from "react-redux"
import s from "./Searchnav.module.css"
import { closeSearch } from "../../../redux/actions/searchActions"


const Searchnav = () => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(closeSearch())
    }

    return (
        <div className={s.search}>
            <div className={s.inner}>
                <div>
                    SEARCH HEADER
                </div>
                <div onClick={onClickHandler} className={s.close}>
                    CLOSE
                </div>
            </div>
        </div>
    )
}

export default Searchnav;