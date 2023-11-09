import React from 'react';
import s from "./Home.module.css"
import { NavLink } from 'react-router-dom';
import main from "../../assets/images/main.png"

const Home = () => {
    return (
        <div className={s.home}>
            <div className="container">
                <NavLink to="/collections/new"><img className={s.img} src={main} alt="IMAGE" /></NavLink>
            </div>
        </div>
    );
};

export default Home;