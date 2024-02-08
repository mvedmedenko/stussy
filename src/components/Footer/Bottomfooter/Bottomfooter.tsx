import s from "./Bottomfooter.module.css"
import { NavLink } from "react-router-dom";
import Chat from "./Chat/Chat";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useState } from "react";
import Country from "./Country/Country";
import { closeChat, openChat} from "../../../redux/actions/chatActions";
import { setNavigationActiveList } from "../../../redux/actions/headerActions";




const Bottomfooter = () => {

    const [isCountry, setIsCountry] = useState<boolean>(false)
    const isChat = useAppSelector(state => state.chatReducer.isChat)
    const dispatch = useAppDispatch()

    const chatHandle = () => {
        if(isChat) {
            dispatch(closeChat())
        } else {
            dispatch(openChat())
        }
    }

    const handleCountry = () => {
        setIsCountry(true)
    }

    const onClickHandler = (text: string) => {
        dispatch(setNavigationActiveList(text))
    }



    
    return (
        <div className={s.bottomfooter}>
            {isCountry ? <Country setIsCountry={setIsCountry}/> : null}

            {isChat ? <Chat/> : null}

            <div>
                <ul className={s.list}>
                    <li onClick={() => onClickHandler("chapters")} className={s.item}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></li>
                    <li className={s.item} onClick={handleCountry}>COUNTRY</li>
                    <li className={s.item} onClick={chatHandle}>{isChat ? "CLOSE" : "CHAT"}</li>
                </ul>
            </div>
            <div className={s.text}>
                © 2023 STÜSSY
            </div>
        </div>
    )
}


export default Bottomfooter;
