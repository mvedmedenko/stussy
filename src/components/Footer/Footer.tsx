import Bottomfooter from "./Bottomfooter/Bottomfooter"
import Topfooter from "./Topfooter/Topfooter"
import s from "./Footer.module.css"




const Footer = () => {
    return (
        <footer className={s.footer}>
            <Topfooter/>
            <Bottomfooter/>
        </footer>
    )
}

export default Footer;