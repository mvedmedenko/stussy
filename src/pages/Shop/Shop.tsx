import { useEffect } from 'react';
import s from "./Shop.module.css"
import { NavLink, useLocation } from 'react-router-dom';
import { getProducts } from '../../redux/actions/shopActions';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {

    const {pathname} = useLocation()
    const pathSplit = pathname.split("/")
    const dispatch = useDispatch()
    const products = (useSelector((state) => {
        return state.shopReducer.products
    }))

    console.log(products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className={s.shop}>
            <div className="container_images">
                <div className={s.grid_container}>
                    {products.map((i) => {
                        if(i.collection === pathSplit[2] || pathSplit[2] === "all") {
                            return <NavLink key={i.id} to={`/collections/all/products/${i.id}`}>
                            <div>
                                <div className={s.img_container}>
                                    <img src={i.firstImg} alt="" />
                                </div>
                                <div className={s.title}>
                                    {i.title}
                                </div>
                                <div className={s.price}>
                                    ${i.price}
                                </div>
                            </div>
                        </NavLink>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Shop;