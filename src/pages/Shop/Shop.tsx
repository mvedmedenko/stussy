import { useEffect, useState } from 'react';
import s from "./Shop.module.css"
import { NavLink, useLocation } from 'react-router-dom';
import { getProducts } from '../../redux/actions/shopActions';
import { setSelectedSize } from '../../redux/actions/shopActions';
import Filter from '../../components/Header/Shopnav/Filter/Filter';
import Loader from '../../utils/Loader/Loader';
import { setNavigationActiveList } from '../../redux/actions/headerActions';
import { setSelectedItem } from '../../redux/actions/shopActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Shop = () => {

    const dispatch = useAppDispatch()
    const isFilter = useAppSelector((state) => state.filterReducer.isFilter)
    const isFetching = useAppSelector((state) => state.shopReducer.isFetching)
    const selectedItem = useAppSelector((state) => state.shopReducer.selectedItem)
    const products = useAppSelector((state) => state.shopReducer.products)
    const [itemHower, setItemHower] = useState<string>("")
    const { pathname } = useLocation()
    const pathSplit = pathname.split("/")


    useEffect(() => {
        dispatch(getProducts())
        dispatch(setNavigationActiveList("shop"))
    }, [])


    const setSelectedSizeHandle = (e: React.MouseEvent<HTMLLIElement>) => {
        const size = e.currentTarget.innerText;
        dispatch(setSelectedSize(size))
    }

    const setSelectedItemHandle = (e: React.MouseEvent<HTMLLIElement>, item) => {

        const element = e.target;
        if (!(element instanceof HTMLLIElement)) {
            dispatch(setSelectedSize('')); 
        }

        localStorage.setItem('prevCollection', pathSplit[2].toUpperCase())
        dispatch(setSelectedItem(item))
        dispatch(setNavigationActiveList("product"))

    };

    const onMouseLeaveHandle = () => {
        setItemHower("")
    }

    return (
        <div className={s.shop}>
            <div>
                {isFetching && <Loader/>}
            </div>
            <div>
                {isFilter && <Filter/>}
            </div>
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
                                onClick={() => setSelectedItemHandle(event, i)}
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