import { useState } from "react";
import s from "./Bottomfooter.module.css"
import { NavLink } from "react-router-dom";
import Chat from "./Chat/Chat";




const Bottomfooter = () => {
    
    const [isChat, setIsChat] = useState<boolean>(false)
    return (
        <div className={s.bottomfooter}>

            {isChat ? <Chat setIsChat={setIsChat}/> : null}

            <div>
                <ul className={s.list}>
                    <li className={s.item}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></li>
                    <li className={s.item}>COUNTRY</li>
                    <li className={s.item} onClick={() => setIsChat(true)}>CHAT</li>
                </ul>
            </div>
            <div className={s.text}>
                © 2023 STÜSSY
            </div>
        </div>
    )
}


export default Bottomfooter;



// {isChat ? <Chat setIsChat={setIsChat}/> : null}

// <div>
//     <ul className={s.list}>
//         <li className={s.item}><NavLink to="/blogs/chapters">CHAPTERS</NavLink></li>
//         <li className={s.item}>COUNTRY</li>
//         <li onClick={() => setIsChat(true)} className={s.item}>CHAT</li>
//     </ul>
// </div>
// <div className={s.text}>
//     © 2023 STÜSSY
// </div>