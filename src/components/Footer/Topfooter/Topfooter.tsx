import { NavLink } from "react-router-dom";
import s from "./Topfooter.module.css"
import instagram from "../../../assets/images/social-media/instagram.svg"
import wechat from "../../../assets/images/social-media/wechat.svg"
import weibo from "../../../assets/images/social-media/weibo.svg"
import vimeo from "../../../assets/images/social-media/vimeo.svg"
import Newsletter from "./Newsletter/Newsletter";
import { useState } from "react";


const Topfooter = () => {

    const [isNewsLetter, setIsNewsLetter] = useState<boolean>(false)


    return (
        <div className={s.topfooter}>
            {isNewsLetter ? <Newsletter setIsNewsLetter={isNewsLetter} /> : null}
            <div>
                <ul className={s.list}>
                    <li onClick={() => setIsNewsLetter(true)} className={s.item}><div>NEWSLETTER</div></li>
                    <li className={s.item}><NavLink to="/pages/customer-support">CONTACT</NavLink></li>
                    <li className={s.item}><NavLink to="/account">ACCOUNT</NavLink></li>
                </ul>
            </div>
            <div>
                <ul className={s.social_media}>
                    <li className={s.item}><NavLink to="https://www.instagram.com/stussy" target="_blank"><img width="12px" height="12px" src={instagram} alt="instagram" /></NavLink></li>
                    <li className={s.item}><NavLink to="https://vimeo.com/stussy" target="_blank"><img width="14px" height="14px" src={vimeo} alt="vimeo" /></NavLink></li>
                    <li className={s.item}><NavLink to="https://www.stussy.com/pages/wechat" target="_blank"><img width="12px" height="12px" src={wechat} alt="wechat" /></NavLink></li>
                    <li className={s.item}><NavLink to="https://www.weibo.com/stussyofficial" target="_blank"><img width="14px" height="14px" src={weibo} alt="weibo" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}


export default Topfooter;