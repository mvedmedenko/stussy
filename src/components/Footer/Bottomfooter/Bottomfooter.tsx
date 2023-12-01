import s from "./Bottomfooter.module.css"
import { NavLink } from "react-router-dom";
import Chat from "./Chat/Chat";
import { useSelector } from "react-redux";
import { openChat } from "../../../redux/actions/chatActions";
import { useDispatch } from "react-redux";




const Bottomfooter = () => {

    const isChat = useSelector(state => state.chatReducer.isChat)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(openChat())
    }
    
    return (
        <div className={s.bottomfooter}>

            {isChat ? <Chat/> : null}

            <div>
                <ul className={s.list}>
                    <li className={s.item}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></li>
                    <li className={s.item}>COUNTRY</li>
                    <li className={s.item} onClick={onClickHandler}>CHAT</li>
                </ul>
            </div>
            <div className={s.text}>
                © 2023 STÜSSY
            </div>
        </div>
    )
}


export default Bottomfooter;
