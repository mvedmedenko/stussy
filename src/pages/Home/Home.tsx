import s from "./Home.module.css"
import { NavLink } from 'react-router-dom';

const Home = () => {
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
