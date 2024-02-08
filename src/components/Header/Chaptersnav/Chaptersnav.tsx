import s from "./Chaptersnav.module.css"
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Chaptersnav = () => {

    const [activeMenu, setActiveMenu] = useState("Asia")
    const [scrollY, setScrollY] = useState(0);

    const onClickHandler = (text: string) => {
        setActiveMenu(text)
    }

    const handleScroll = () => {
        setScrollY(window.scrollY);
      };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if(scrollY > 0 && scrollY < 1011) {
            setActiveMenu("Asia")
        } else if(scrollY > 1012 && scrollY < 1395) {
            setActiveMenu("UnitedKingdom")
        } else if(scrollY > 1396 && scrollY < 1800) {
            setActiveMenu("NorthAmerica")
        } else if(scrollY > 1800 && scrollY < 1854) {
            setActiveMenu("Oceania")
        } else if(scrollY > 1855) {
            setActiveMenu("StreetMarket")
        }
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollY]);

    return (
        <div>
            <div className={s.inner}>
                <div>
                    <ul className={s.list}>
                        <Link
                            to="Asia"
                            spy={true}
                            smooth={false}
                            duration={500}
                            className={activeMenu === "Asia" ? s.active : s.item}
                            onClick={() => onClickHandler("Asia")}
                            offset={-100}
                        >
                            ASIA
                        </Link>
                        <Link
                            to="UnitedKingdom"
                            spy={true}
                            smooth={false}
                            duration={500}
                            className={activeMenu === "UnitedKingdom" ? s.active : s.item}
                            onClick={() => onClickHandler("UnitedKingdom")}
                            offset={-100}
                        >
                            EUROPE/ UNITED KINGDOM
                        </Link>
                        <Link
                            to="NorthAmerica"
                            spy={true}
                            smooth={false}
                            duration={500}
                            className={activeMenu === "NorthAmerica" ? s.active : s.item}
                            onClick={() => onClickHandler("NorthAmerica")}
                            offset={-100}
                        >
                            NORTH AMERICA
                        </Link>
                        <Link
                            to="Oceania"
                            spy={true}
                            smooth={false}
                            duration={500}
                            offset={-300}
                            className={activeMenu === "Oceania" ? s.active : s.item}
                            onClick={() => onClickHandler("Oceania")}
                        >
                            OCEANIA
                        </Link>
                        <Link
                            to="StreetMarket"
                            spy={true}
                            smooth={false}
                            duration={500}
                            className={activeMenu === "StreetMarket" ? s.active : s.item}
                            onClick={() => onClickHandler("StreetMarket")}
                        >
                            DOVER STREET MARKET
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Chaptersnav;


