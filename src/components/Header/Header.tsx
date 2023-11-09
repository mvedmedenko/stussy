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
    const [mouseOnLink, setMouseOnLink] = useState<string | null>(null)

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.logo}>
                        <Logo
                            setActiveLink={setActiveLink}
                        />
                    </div>
                    <div className={s.navbar}>
                        <Navbar
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            setMouseOnLink={setMouseOnLink}
                            mouseOnLink={mouseOnLink}
                        />
                    </div>
                    <div className={s.rightside}>
                        <Search
                            setActiveLink={setActiveLink}
                            activeLink={activeLink}
                        />
                        <Bag setActiveLink={setActiveLink}
                            activeLink={activeLink}
                        />
                    </div>
                </div>
                <div className={s.bottom_list}>
                    {((mouseOnLink === null && activeLink === "shop") || mouseOnLink === "shop") && (
                        <Shopnav />
                    )}
                    {((mouseOnLink === null && activeLink === "features") || mouseOnLink === "features") && (
                        <Featuresnav />
                    )}
                    {((mouseOnLink === null && activeLink === "support") || mouseOnLink === "support") && (
                        <Supportnav />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

