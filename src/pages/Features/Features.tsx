import s from "./Features.module.css"
import { featuresData } from './featuresData';
import { NavLink } from 'react-router-dom';

const Features = () => {
    
    return (
        <div className={s.features}>
            <div className='container_images'>
                <div className={s.grid_container}>
                    {featuresData.map((item) => {
                        return (
                            <NavLink className={s.link} to={`/blogs/features/${item.id}`} key={item.id}>
                                <div>
                                    <div className={s.img_container}>
                                        <img src={item.mainImage.link} alt="img" />
                                    </div>
                                    <div className={s.title}>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className={s.description}>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <div className={s.mark_container}>
                                    <div>
                                        <p>{item.tag}</p>
                                    </div>
                                    <div className={s.data}>
                                        <p>{item.data}</p>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Features;