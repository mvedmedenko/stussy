import { useEffect, useState } from 'react';
import s from "./Shop.module.css"
import { NavLink, useLocation } from 'react-router-dom';
import { getProducts, getSelectedItem } from '../../redux/actions/shopActions';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSize } from '../../redux/actions/shopActions';

const Shop = () => {

    const dispatch = useDispatch()
    const [itemHower, setItemHower] = useState<string>("")
    const { pathname } = useLocation()
    const pathSplit = pathname.split("/")

    const products = (useSelector((state) => {
        return state.shopReducer.products
    }))

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const setSelectedSizeHandle = (e: React.MouseEvent<HTMLLIElement>) => {
        const size = e.currentTarget.innerText;
        dispatch(setSelectedSize(size))
    }

    const setSelectedItem = (e: React.MouseEvent<HTMLLIElement>, id: string) => {

        const element = e.target;
        if (!(element instanceof HTMLLIElement)) {
            dispatch(setSelectedSize('')); 
        }

        const selectedItem = products.find((i) => i.id === id)
        const itemStr = JSON.stringify(selectedItem);
        localStorage.setItem('selectedItem', itemStr);
        localStorage.setItem('prevCollection', pathSplit[2].toUpperCase())
        dispatch(getSelectedItem(selectedItem))

    };

    const onMouseLeaveHandle = () => {
        setItemHower("")
    }

    return (
        <div className={s.shop}>
            <div className="container_images">
                <div className={s.grid_container}>
                    {products.map((i) => {
                        if (i.collection === pathSplit[2] || pathSplit[2] === "all") {
                            return <NavLink
                                onMouseEnter={() => setItemHower(i.id)}
                                onMouseLeave={onMouseLeaveHandle}
                                key={i.id}
                                to={`/collections/all/products/${i.id}`}
                                className="link"
                                onClick={() => setSelectedItem(event, i.id)}
                                >
                                <div>
                                    <div className={s.img_container}>
                                        <img src={itemHower === i.id ? i.secondImg : i.firstImg} alt="" />
                                    </div>
                                    <div className={s.title}>
                                        {i.title}
                                    </div>
                                    <div className={s.price}>
                                        ${i.price}
                                    </div>
                                </div>
                                <div className={s.sizes}>
                                    <ul className={s.size_list}>
                                    {itemHower === i.id
                                        ? i.sizes.map((s, index) => {
                                            return <li onClick={setSelectedSizeHandle} key={index}>{s}</li>;
                                        })
                                        : null}
                                    </ul>
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