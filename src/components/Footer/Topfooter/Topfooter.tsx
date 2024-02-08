import { NavLink } from "react-router-dom";
import s from "./Topfooter.module.css"
import instagram from "../../../assets/images/social-media/instagram.svg"
import wechat from "../../../assets/images/social-media/wechat.svg"
import weibo from "../../../assets/images/social-media/weibo.svg"
import vimeo from "../../../assets/images/social-media/vimeo.svg"
import Newsletter from "./Newsletter/Newsletter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNavigationActiveList } from "../../../redux/actions/headerActions";
import { setAccountNavigationActiveList } from "../../../redux/actions/headerActions";


const Topfooter = () => {

    const [isNewsLetter, setIsNewsLetter] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onClickHandler = (text: string) => {
        dispatch(setNavigationActiveList(text))
        dispatch(setAccountNavigationActiveList(text))
    }


    return (
        <div>
            { isNewsLetter ? <Newsletter setIsNewsLetter={setIsNewsLetter} /> : null }
            <div className={s.topfooter}>
                <div>
                    <ul className={s.list}>
                        <li onClick={() => setIsNewsLetter(true)} className={s.item}>NEWSLETTER</li>
                        <li className={s.item}><NavLink to="/pages/customer-support">CONTACT</NavLink></li>
                        <li onClick={() => onClickHandler("account")} className={s.item}><NavLink to="/account">ACCOUNT</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className={s.social_media}>
                        <li ><NavLink to="https://www.instagram.com/stussy" target="_blank"><img width="12px" height="12px" src={instagram} alt="instagram" /></NavLink></li>
                        <li ><NavLink to="https://vimeo.com/stussy" target="_blank"><img width="14px" height="14px" src={vimeo} alt="vimeo" /></NavLink></li>
                        <li ><NavLink to="https://www.stussy.com/pages/wechat" target="_blank"><img width="12px" height="12px" src={wechat} alt="wechat" /></NavLink></li>
                        <li ><NavLink to="https://www.weibo.com/stussyofficial" target="_blank"><img width="14px" height="14px" src={weibo} alt="weibo" /></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Topfooter;