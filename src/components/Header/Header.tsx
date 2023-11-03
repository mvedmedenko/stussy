import s from "./Header.module.css"
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Shopnav from "./Shopnav/Shopnav";
import Search from "./Search/Search";
import Bag from "./Bag/Bag";
import Featuresnav from "./Featuresnav/Featuresnav";
import Supportnav from "./Supportnav/Supportnav";
import { useState } from "react";

const Header = () => {

    const [activeLink, setActiveLink] = useState<string>("shop")

    return (
        <div className={s.header}>
            <div className={s.inner}>
                <div className={s.logo}>
                    <Logo />
                </div>
                <div>
                    <Navbar setActiveLink={setActiveLink} />
                </div>
                <div className={s.rightside}>
                    <Search />
                    <Bag />
                </div>
            </div>
            <div>
                {
                    activeLink === "shop" ? <Shopnav />
                        : (activeLink === "features" ? <Featuresnav />
                            : (activeLink === "support" ? <Supportnav /> : null))
                }
            </div>
        </div>
    );
};

export default Header;