import s from "./Home.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import { setNavigationActiveList } from "../../redux/actions/headerActions";
import { useAppDispatch } from "../../hooks/hooks";

const Home = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setNavigationActiveList("main"))
    }, [])

    return (
        <div className={s.home}>
            <div className="container_images">
            <div className={s.inner}>
                <NavLink to="/collections/new"><div className={s.image_container}></div></NavLink>
            </div>
            </div>
        </div>
    );
};

export default Home;
