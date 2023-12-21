import s from "./Bottomfooter.module.css"
import { NavLink } from "react-router-dom";
import Chat from "./Chat/Chat";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Country from "./Country/Country";
import { closeChat, openChat} from "../../../redux/actions/chatActions";




const Bottomfooter = () => {

    const [isCountry, setIsCountry] = useState<boolean>(false)
    const isChat = useSelector(state => state.chatReducer.isChat)
    const dispatch = useDispatch()

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


    
    return (
        <div className={s.bottomfooter}>
            {isCountry ? <Country setIsCountry={setIsCountry}/> : null}

            {isChat ? <Chat/> : null}

            <div>
                <ul className={s.list}>
                    <li className={s.item}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></li>
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
